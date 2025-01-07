import { Client } from "pg";
import express from "express";

const app = express();

app.use(express.json());

// get the users and their addresses
//JOINS IN SQL
app.get("/users", async (req, res) => {
	const id = req.query.userid;
	const joinQuery =
		"SELECT users.username, users.email, addresses.city, addresses.country FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id= $1";
	const users = await pgClient.query(joinQuery, [id]);

	res.json({
		users: users.rows,
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
