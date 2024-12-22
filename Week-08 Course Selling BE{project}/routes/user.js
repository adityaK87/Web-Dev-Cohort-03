require("dotenv").config();
const { Router } = require("express");
const { UserModel } = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { requiredBody } = require("../helper");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
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

		await UserModel.create({
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

userRouter.post("/signin", async (req, res) => {
	try {
		const parsedData = requiredBody.safeParse(req.body);
		const { email, password } = parsedData.data;
		const foundUser = await UserModel.findOne({ email });
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
			process.env.JWT_SECRET_PASS
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

userRouter.post("/purchases", (req, res) => {
	res.json({
		message: "my purchases course",
	});
});

module.exports = { userRouter: userRouter };
