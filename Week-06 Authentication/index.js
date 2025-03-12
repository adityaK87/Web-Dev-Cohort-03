const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "thisIsJWT";
const app = express();

app.use(express.json());
const users = [];

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	users.push({ username, password });
	res.status(200).json({
		message: "Sign up successfully",
	});
});

app.post("/signin", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const user = users.find(
		(user) => user.username === username && user.password === password
	);
	if (user) {
		const token = jwt.sign(
			{
				username: username,
			},
			JWT_SECRET
		);
		res.status(200).json({
			token: token,
		});
	} else {
		res.status(404).json({
			message: "User not Found",
		});
	}
});

function auth(req, res, next) {
	const token = req.headers.token;
	decodedData = jwt.verify(token, JWT_SECRET);
	if (decodedData.username) {
		req.decodedData = decodedData;
		next();
	} else {
		res.json({
			message: "You are not logged in",
		});
	}
}

app.get("/me", auth, (req, res) => {
	const user = users.find(
		(user) => user.username === req.decodedData.username
	);
	if (user) {
		res.status(200).json({
			username: user.username,
		});
	} else {
		res.status(404).json({
			message: "Token is not valid",
		});
	}
});

app.listen(3000, () => {
	console.log("listening on port 3000");
});
