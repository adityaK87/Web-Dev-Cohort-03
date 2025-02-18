import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import {
	CreateRoomSchema,
	CreateUserSchema,
	SigninSchema,
} from "@repo/common/types";

import { JWT_SECRET } from "@repo/backend-common/config";
import { prismaClient } from "@repo/db/prisma";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
	const parsedData = CreateUserSchema.safeParse(req.body);
	if (!parsedData.success) {
		res.json({
			message: "Invalid data",
		});
		return;
	}
	try {
		await prismaClient.user.create({
			data: {
				email: parsedData.data.username,
				password: parsedData.data.password,
				name: parsedData.data.name,
			},
		});
		res.status(200).json({
			message: "User Created Successfully",
		});
	} catch (err) {
		res.status(411).json({
			message: "User Already Exists",
		});
	}
});

app.post("/signin", (req, res) => {
	const data = SigninSchema.safeParse(req.body);
	if (!data.success) {
		res.json({
			message: "Invalid data",
		});
		return;
	}

	const userId = 1;
	const token = jwt.sign({ userId }, JWT_SECRET);

	res.status(200).json({
		token: token,
	});
});

app.post("/chat", middleware, (req, res) => {
	const data = CreateRoomSchema.safeParse(req.body);
	if (!data.success) {
		res.json({
			message: "Invalid data",
		});
		return;
	}
	const userId = req.userId;
	//DB CALL
	res.json({
		user: userId,
	});
});

app.listen(3001, () => {
	console.log("http://localhost:3001");
});
