import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
	port: 8080,
});

wss.on("connection", function (ws) {
	console.log("Some one Connected");
});
