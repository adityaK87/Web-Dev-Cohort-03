require("dotenv").config();
const { Router } = require("express");
const adminRouter = Router();
const { AdminModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { requiredBody } = require("../helper");

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
		console.log("jwt scret", process.env.JWT_SECRET_PASS);
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

adminRouter.post("/course", (req, res) => {
	res.json({
		message: "create course endpoint",
	});
});

adminRouter.put("/couse/:courseId", (req, res) => {
	res.json({
		message: "change course",
	});
});

adminRouter.get("/bulk", (req, res) => {
	res.json({
		message: "all the bulk courses",
	});
});

module.exports = {
	adminRouter: adminRouter,
};
