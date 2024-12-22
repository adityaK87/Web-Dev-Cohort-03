const express = require("express");

const app = express();

function isAllowedToRide(req, res, next) {
	const age = req.query.age;
	if (age >= 14) {
		next();
	} else {
		res.json({
			msg: "You are not allowed to ride",
		});
	}
}

app.get("/ride1", isAllowedToRide, (req, res) => {
	res.json({
		msg: "You have successfully completed the ride 1",
	});
});

app.get("/ride2", isAllowedToRide, (req, res) => {
	res.json({
		msg: "You have successfully completed the ride 2",
	});
});

app.listen(3000, () => {
	console.log("listening on http://localhost:3000");
});
