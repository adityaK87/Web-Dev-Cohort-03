const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/courses", courseRouter);

app.listen(3000, () => {
	console.log("listening on http://localhost:3000");
});
