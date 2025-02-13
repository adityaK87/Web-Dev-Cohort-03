import { JWT_SECRET } from "./config";
import express from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";

const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {
	//DB call
});

app.post("/signin", (req, res) => {
	const userId = 1;
	const token = jwt.sign({ userId }, JWT_SECRET);

	res.status(200).json({
		token: token,
	});
});

app.post("/chat", middleware, (req, res) => {
	const userId = req.userId;
	//DB CALL
	res.json({
		user: userId,
	});
});

app.listen(3001, () => {
	console.log("http://localhost:3001");
});
