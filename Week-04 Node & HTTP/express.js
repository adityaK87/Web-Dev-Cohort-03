const express = require("express");

const app = express();

const users = [
	{
		name: "John",
		kidneys: [
			{
				healthy: false,
			},
		],
	},
];

app.use(express.json());

app.get("/", function (req, res) {
	const JohnKidneys = users[0].kidneys;
	const numberOfKidneys = JohnKidneys.length;
	let numberOfHealthyKidneys = 0;
	for (let i = 0; i < numberOfKidneys; i++) {
		if (JohnKidneys[i].healthy) {
			numberOfHealthyKidneys++;
		}
	}
	const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
	res.json({
		numberOfKidneys,
		numberOfHealthyKidneys,
		numberOfUnhealthyKidneys,
	});
});

app.post("/", function (req, res) {
	console.log(req.body);
	const isHealthy = req.body.isHealthy;
	users[0].kidneys.push({ healthy: isHealthy });
	res.json({
		msg: "Done!",
	});
	res.sendStatus(200);
});

app.put("/", function (req, res) {
	for (let i = 0; i < users[0].kidneys.length; i++) {
		users[0].kidneys[i].healthy = true;
	}
	res.json({ msg: "Success" });
});

app.delete("/", function (req, res) {
	let newKidneys = [];
	newKidneys = users[0].kidneys.filter((kidney) => {
		kidney.healthy === true;
	});

	users[0].kidneys = newKidneys;
	res.json({ msg: "Success" });
});

app.listen(3000, function () {
	console.log("listening on 3000 port");
});
