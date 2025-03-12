import express from "express";
import jwt from "jsonwebtoken";
import { dbConnection } from "./dbConnection";
import { z } from "zod";
import { ContentModel, UserModel, LinkModel } from "./db";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "./config";
import { userAuth } from "./middleware";
import { randomString } from "./utils";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const SignupData = z
	.object({
		username: z.string().min(3).max(20),
		password: z.string().min(8).max(20),
	})
	.required();

app.post("/api/v1/signup", async (req, res) => {
	try {
		//Validating the Input Data
		let parsedData = SignupData.safeParse(req.body);

		if (parsedData.success === false) {
			res.status(411).json({
				message: "Error signing up " + parsedData.error,
			});
			return;
		}
		//Hashing the data
		const hashedPassword = await bcrypt.hash(parsedData.data.password, 5);
		await UserModel.create({
			username: parsedData.data.username,
			password: hashedPassword,
		});

		res.status(200).json({
			message: "Signed up Successfully",
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error",
			error: error,
		});
	}
});

app.post("/api/v1/signin", async (req, res) => {
	const { username, password } = req.body;

	try {
		// Check if user exists
		const user = await UserModel.findOne({ username });

		if (!user) {
			res.status(404).json({ message: "User not found" });
			return;
		}

		if (!user.password) {
			res.status(400).json({ message: "Invalid user data" });
			return;
		}

		// Validate password
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			res.status(403).json({ message: "Invalid credentials" });
			return;
		}

		// Generate JWT token
		const token = jwt.sign({ id: user.id }, JWT_SECRET, {
			expiresIn: "30d",
		});

		// Return token
		res.status(200).json({ token });
	} catch (error) {
		console.error("Error in /signin route:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

app.post("/api/v1/content", userAuth, async (req, res) => {
	try {
		const { title, link, type } = req.body;
		await ContentModel.create({
			title,
			link,
			type,
			userId: req.userId,
			tags: [],
		});
		res.status(200).json({
			message: "Content Created successfully",
		});
	} catch (error) {
		res.status(411).json({
			message: "Please login",
		});
	}
});

app.get("/api/v1/content", userAuth, async (req, res) => {
	try {
		const contents = await ContentModel.find({
			userId: req.userId,
		}).populate("userId", "username");
		res.status(200).json({
			content: contents,
		});
	} catch (error) {
		res.status(411).json({
			message: "User is not Logged in",
		});
	}
});

app.delete("/api/v1/content", userAuth, async (req, res) => {
	try {
		const contentId = req.body.contentId;
		await ContentModel.deleteOne({
			_id: contentId,
			userId: req.userId,
		});
		res.status(200).json({
			message: "",
		});
	} catch (error) {}
});

app.post("/api/v1/brain/share", userAuth, async (req, res) => {
	const share = req.body.share;
	if (share) {
		const existingLink = await LinkModel.findOne({
			userId: req.userId,
		});
		if (existingLink) {
			res.json({
				hash: existingLink.hash,
			});
			return;
		}
		const hash = randomString(10);
		await LinkModel.create({
			hash,
			userId: req.userId,
		});
		res.status(200).json({
			hash: hash,
		});
		return;
	} else {
		await LinkModel.deleteOne({
			userId: req.userId,
		});
	}
});

app.get("/api/v1/brain/:shareLink", async (req, res) => {
	const hash = req.params.shareLink;
	console.log(hash);

	const link = await LinkModel.findOne({
		hash: hash,
	});
	console.log(link);
	if (!link) {
		res.status(411).json({
			message: "Sorry Incorrect Input",
		});
		return;
	}

	const content = await ContentModel.find({
		userId: link.userId,
	});

	const user = await UserModel.findOne({
		_id: link.userId,
	});

	if (!user) {
		res.status(411).json({
			message: "User not Found, Error should ideally nt happen",
		});
		return;
	}
	res.json({
		username: user.username,
		content: content,
	});
});

dbConnection().then(() => {
	app.listen(8080, () => {
		console.log("Listening on port 8080");
	});
});
