import { Client } from "pg";

export async function dbConnection(pgClient: Client) {
	try {
		await pgClient.connect();
		console.log("DB connected");
	} catch (e) {
		console.log("Got error");
	}
}
