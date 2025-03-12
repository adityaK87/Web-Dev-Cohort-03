const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
	const token = req.headers.token;
	const decoded = jwt.verify(token, process.env.JWT_SECRET_PASS);
	if (decoded) {
		req.userId = decoded.userId;
		next();
	} else {
		res.json({ message: "You are not signed in " });
	}
}

module.exports = {
	userMiddleware,
};
