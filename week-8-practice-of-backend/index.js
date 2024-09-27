const express = require("express");

const app = express();

app.post("/user/signup", (req, res) => {
	res.json({
		message: "User signed up successfully",
	});
});

app.post("/user/signin", (req, res) => {
	res.json({
		message: "User signed in successfully",
	});
});

app.post("/user/purchases", (req, res) => {
	res.json({
		message: "my purchases course",
	});
});

app.get("/courses/preview", (req, res) => {
	res.json({
		message: "All courses preview",
	});
});

app.get("/courses/mycourses", (req, res) => {
	res.json({
		message: "All courses preview",
	});
});

app.listen(3000, () => {
	console.log("listening on http://localhost3000");
});
