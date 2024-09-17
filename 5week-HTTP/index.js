const express = require("express");

const app = express();

app.get("/multiply", (req, res) => {
	const a = req.query.a;
	const b = req.query.b;
	res.json({ ans: a * b });
});

app.get("/add", (req, res) => {
	const a = parseInt(req.query.a);
	const b = parseInt(req.query.b);
	res.json({ ans: a + b });
});
app.get("/divide", (req, res) => {
	const a = req.query.a;
	const b = req.query.b;
	res.json({ ans: a / b });
});

app.get("/minus", (req, res) => {
	const a = req.query.a;
	const b = req.query.b;
	res.json({ ans: a - b });
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
