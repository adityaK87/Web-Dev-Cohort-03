const { Router } = require("express");

const courseRouter = Router();

courseRouter.get("/preview", (req, res) => {
	res.json({
		message: "All courses preview",
	});
});

courseRouter.get("/mycourses", (req, res) => {
	res.json({
		message: "My courses",
	});
});

module.exports = { courseRouter: courseRouter };
