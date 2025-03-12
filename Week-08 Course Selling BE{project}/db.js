const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
	email: { type: String, unique: true, required: true },
	password: String,
	firstName: String,
	lastName: String,
});

const adminSchema = new Schema({
	email: { type: String, unique: true, required: true },
	password: String,
	firstName: String,
	lastName: String,
});

const courseSchema = new Schema({
	title: String,
	description: String,
	price: Number,
	imageUrl: String,
	createrId: ObjectId,
});

const purchaseSchema = new Schema({
	userId: ObjectId,
	courseId: ObjectId,
});

const UserModel = mongoose.model("users", userSchema);
const AdminModel = mongoose.model("admin", adminSchema);
const CourseModel = mongoose.model("courses", courseSchema);
const PurchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
	UserModel,
	AdminModel,
	CourseModel,
	PurchaseModel,
};
