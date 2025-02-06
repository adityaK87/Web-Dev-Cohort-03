import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();

const client = new PrismaClient();

app.get("/users", async (req, res) => {
	const users = await client.user.findMany();
	res.send(users);
});

app.get("/todos/:id", async (req, res) => {
	const id = req.params.id as unknown as number;
	const todos = await client.todo.findMany({
		where: {
			userId: Number(id),
		},
	});
	res.send(todos);
});

app.listen(3000);
