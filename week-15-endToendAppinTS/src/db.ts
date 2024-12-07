import { model, Schema } from "mongoose";

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
	},
});

const TagSchema = new Schema({
	title: String,
});

const contentSchema = new Schema({
	title: {
		type: String,
		minLength: 4,
		maxLentgth: 500,
	},
	link: String,
	tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
	userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const UserModel = model("User", userSchema);
export const TagModel = model("Tag", TagSchema);
export const ContentModel = model("Content", contentSchema);
