import express from "express";
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();
import { dbConnection } from "./dbConnection";

//creating a client who can talk to the database
const pgClient = new Client(process.env.DATABASE_URL);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
	try {
		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;
		const insertQuery =
			"INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *";

		await pgClient.query(insertQuery, [username, email, password]);

		res.status(200).json({
			message: "User registered successfully",
		});
	} catch (err) {
		res.json({
			error: err,
		});
	}
});

app.post("/signin", async (req, res) => {
	try {
		const username = req.body.username;
		const findQuery = "SELECT * FROM users WHERE username = $1";
		const user = await pgClient.query(findQuery, [username]);

		if (!user) {
			res.json({
				message: "Wrong Credentials",
			});
			return;
		}

		res.status(200).json({
			message: "Signed in successfully",
			data: user.rows,
		});
	} catch (error) {
		res.status(500).json({
			message: "Server Error Occured",
		});
	}
});

dbConnection(pgClient).then(() => {
	app.listen(3000);
	console.log("app is running on http://localhost:3000");
});
