const { Router } = require("express");
const adminRouter = Router();
const { AdminModel } = require("../db");

adminRouter.post("/signup", (req, res) => {
	res.json({
		message: "User signed up successfully",
	});
});

adminRouter.post("/signin", (req, res) => {
	res.json({
		message: "User signed in successfully",
	});
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
