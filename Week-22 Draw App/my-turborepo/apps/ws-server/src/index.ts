import jwt from "jsonwebtoken";
import { WebSocketServer } from "ws";
import { JWT_SECRET } from "@repo/backend-common/config";

const wss = new WebSocketServer({
	port: 8080,
});

wss.on("connection", function (ws, request) {
	const url = request.url;
	if (!url) {
		return;
	}

	const queryParams = new URLSearchParams(url.split("?")[1]);
	const token = queryParams.get("token") || "";

	const decoded = jwt.sign(token, JWT_SECRET);
	console.log("Some one Connected");
});
