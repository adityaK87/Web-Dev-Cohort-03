import { model, Schema } from "mongoose";

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
});

export const UserModel = model("user", userSchema);
