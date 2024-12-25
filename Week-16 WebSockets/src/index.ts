import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
	console.log("Connection Established");
	socket.send("data send");
	setInterval(() => {
		socket.send("Price of solana is " + Math.random());
	}, 500);

	socket.on("message", (e) => console.log(e.toString()));
});
