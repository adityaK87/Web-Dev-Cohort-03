require("dotenv").config();
const { Router } = require("express");
const adminRouter = Router();
const { AdminModel, CourseModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { requiredBody, validateCourse } = require("../helper");
const { adminMiddleware } = require("../middlewares/admin");
const course = require("./course");

adminRouter.post("/signup", async (req, res) => {
	try {
		const parsedData = requiredBody.safeParse(req.body);
		if (!parsedData.success) {
			res.json({
				messsage: "Signup failed",
				errors: parsedData.error,
			});
			return;
		}
		const { email, password, firstName, lastName } = parsedData.data;
		const hashedPassword = await bcrypt.hash(password, 5);

		await AdminModel.create({
			email,
			password: hashedPassword,
			firstName,
			lastName,
		});
		res.json({
			message: "Signed up successfully",
		});
	} catch (error) {
		res.json({
			message: "User already exists",
		});
	}
});

adminRouter.post("/signin", async (req, res) => {
	try {
		const parsedData = requiredBody.safeParse(req.body);
		const { email, password } = parsedData.data;
		const foundUser = await AdminModel.findOne({ email });
		if (!foundUser) {
			res.json({
				message: "User not found",
			});
			return;
		}
		const isPasswordCorrect = await bcrypt.compare(
			password,
			foundUser.password
		);
		if (!isPasswordCorrect) {
			res.json({
				message: "Password is incorrect",
			});
			return;
		}
		// console.log(foundUser._id.toString());

		const token = jwt.sign(
			{ userId: foundUser._id.toString() },
			process.env.JWT_ADMIN_SECRET
		);
		res.json({
			token: token,
		});
	} catch (error) {
		res.json({
			message: "",
		});
	}
});

adminRouter.post("/course", adminMiddleware, async (req, res) => {
	try {
		const parsedCourse = validateCourse.safeParse(req.body);
		userId = req.userId;
		console.log(parsedCourse.data);
		console.log(req.userId);
		const { title, description, price, imageUrl } = parsedCourse.data;

		await CourseModel.create({
			title: title,
			description: description,
			price: price,
			imageUrl: imageUrl,
			createrId: userId,
		});

		res.json({
			message: "Course created successfully",
		});
	} catch (error) {
		res.json({
			message: "put right credentials",
		});
	}
});

adminRouter.put("/course/:courseId", adminMiddleware, async (req, res) => {
	try {
		const courseId = req.params.courseId;
		const parsedCourse = validateCourse.safeParse(req.body);
		const { title, description, price, imageUrl } = parsedCourse.data;
		await CourseModel.findByIdAndUpdate(courseId, {
			title,
			description,
			price,
			imageUrl,
		});

		res.json({
			message: "Course update successfully",
		});
	} catch (error) {
		res.json({
			message: "Course update failed",
			error: error.message,
		});
	}
});

adminRouter.get("/bulk", adminMiddleware, async (req, res) => {
	const courses = await CourseModel.find();
	console.log(courses);
	res.send({
		courses: courses,
	});
});

module.exports = {
	adminRouter: adminRouter,
};
