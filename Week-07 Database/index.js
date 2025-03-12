const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { JWT_SECRET } = require("./constant");
const { z } = require("zod");

const app = express();
app.use(express.json());
const { UserModel, TodoModel } = require("./db");
const { auth } = require("./auth");

mongoose
	.connect(
		"mongodb+srv://adityapal1409:8UQ4wT192KCrUIuj@cluster0.l39r0.mongodb.net/Todo-app-DB"
	)
	.then(() => {
		console.log("DB connection established");
	})
	.catch((err) => {
		console.log(err.message);
	});

app.post("/signup", async function (req, res) {
	// Input validations using zod
	const requireBody = z.object({
		email: z.string().min(10).max(100).email(),
		password: z.string().min(3).max(100),
		name: z.string().min(3).max(100),
	});

	const parsedData = requireBody.safeParse(req.body);

	if (!parsedData.success) {
		res.json({
			message: "Invalid",
			errors: parsedData.error,
		});
		return;
	}

	const { name, email, password } = parsedData.data;
	const hashedPassword = await bcrypt.hash(password, 5);

	await UserModel.create({
		name: name,
		email: email,
		password: hashedPassword,
	});
	res.status(200).json({
		message: "User created",
	});
});

app.post("/signin", async function (req, res) {
	const { email, password } = req.body;

	const user = await UserModel.findOne({ email: email });
	const isCorrectPassword = await bcrypt.compare(password, user.password);
	if (isCorrectPassword) {
		const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
		res.status(200).json({
			token: token,
		});
	} else {
		res.status(403).json({
			message: "Incorrect credentials",
		});
	}
});

app.post("/todo", auth, async function (req, res) {
	const { title, done } = req.body;

	await TodoModel.create({ title: title, done: done, userId: req.userId });
	res.status(200).json({
		message: "Todo created successfully",
	});
});

app.get("/todos", auth, async function (req, res) {
	const todos = await TodoModel.find({ userId: req.userId });
	res.json(todos);
});

app.listen(3000, () => {
	console.log("listening on 3000");
});
