const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/courses", courseRouter);

const main = async () => {
	await mongoose.connect(
		"mongodb+srv://adityapal1409:8UQ4wT192KCrUIuj@cluster0.l39r0.mongodb.net/couse-selling"
	);
	console.log("Database connection established");
	app.listen(3000, () => {
		console.log("listening on http://localhost:3000");
	});
};
main();
