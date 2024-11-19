import express from "express";
import jwt from "jsonwebtoken";
import { dbConnection } from "./dbConnection";
import { z } from "zod";
import { UserModel } from "./db";
import bcrypt from "bcrypt";

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

app.post("/api/v1/signin", (req, res) => {});

app.post("/api/v1/content", (req, res) => {});

app.get("/api/v1/content", (req, res) => {});

app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

dbConnection().then(() => {
	app.listen(8080, () => {
		console.log("Listening on port 8080");
	});
});
