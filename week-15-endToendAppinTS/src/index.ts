import express from "express";
import jwt from "jsonwebtoken";
import { dbConnection } from "./dbConnection";
import { z } from "zod";
import { ContentModel, UserModel } from "./db";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "./config";
import { userAuth } from "./middleware";

const app = express();
app.use(express.json());

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
			expiresIn: "1h",
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
		const { title, link } = req.body;
		await ContentModel.create({
			title,
			link,
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

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

dbConnection().then(() => {
	app.listen(8080, () => {
		console.log("Listening on port 8080");
	});
});
