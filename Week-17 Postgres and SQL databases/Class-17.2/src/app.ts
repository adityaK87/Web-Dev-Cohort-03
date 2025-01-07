import { Client } from "pg";
import express from "express";

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
	const users = await pgClient.query("SELECT * FROM users;");

	res.json({
		users: users,
	});
});

app.post("/signup", async (req, res) => {
	try {
		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;

		const city = req.body.city;
		const country = req.body.country;
		const street = req.body.street;
		const pincode = req.body.pincode;

		// Transaction
		await pgClient.query("BEGIN");
		const insertUserQuery =
			"INSERT INTO users(username, email, password)VALUES($1, $2, $3) RETURNING users.id";
		const { rows } = await pgClient.query(insertUserQuery, [
			username,
			email,
			password,
		]);

		const user_id = rows[0].id;
		const insertAddressQuery =
			"INSERT INTO addresses(user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5)";

		await pgClient.query(insertAddressQuery, [
			user_id,
			city,
			country,
			street,
			pincode,
		]);

		pgClient.query("COMMIT");
		res.send("");
	} catch (error) {}
});

const pgClient = new Client({
	user: "neondb_owner",
	password: "fqpis1mo4aYz",
	host: "ep-falling-darkness-a5m3kvbv.us-east-2.aws.neon.tech",
	database: "neondb",
	ssl: true,
});

pgClient.connect().then(() => {
	app.listen(3000);
});
