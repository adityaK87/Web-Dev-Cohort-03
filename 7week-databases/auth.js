const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./constant");

function auth(req, res, next) {
	const token = req.headers.token;

	const user = jwt.verify(token, JWT_SECRET);
	if (token) {
		req.userId = user.id;
		next();
	} else {
		res.status(403).json({
			message: "Invalid token",
		});
	}
}

module.exports = { auth };
