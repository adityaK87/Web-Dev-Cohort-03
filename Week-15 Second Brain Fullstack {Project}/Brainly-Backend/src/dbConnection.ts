import mongoose from "mongoose";
import { MONGODB_URL } from "./config";

export const dbConnection = async () => {
	try {
		await mongoose.connect(MONGODB_URL + "/brainly");
		console.log(`Connected to MongoDB`);
	} catch (error) {
		console.log(`Failed to connect to MongoDB due to error: ${error}`);
	}
};
