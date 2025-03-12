import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();

const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
	const users = await prismaClient.user.findMany();
	res.json({ users });
});

app.post("/", async (req, res) => {
	await prismaClient.user.create({
		data: {
			username: Math.random().toString(),
			password: Math.random().toString(),
		},
	});
	res.send("User Created");
});

app.listen(3000);
