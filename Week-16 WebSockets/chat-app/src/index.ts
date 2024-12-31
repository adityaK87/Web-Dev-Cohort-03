import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({
	port: 8080,
});

interface User {
	socket: WebSocket;
	roomId: string;
}
let userConnected = 0;
let allSockets: User[] = [];

wss.on("connection", (socket) => {
	socket.on("message", (message) => {
		let parsedMessage = JSON.parse(message as unknown as string);

		if (parsedMessage.type === "join") {
			console.log("Joinded  the room" + parsedMessage.payload.roomId);
			allSockets.push({
				socket: socket,
				roomId: parsedMessage.payload.roomId,
			});
		}

		if (parsedMessage.type == "chat") {
			console.log("User Wants to chat");
			const currentUserRoom = allSockets.find(
				(x) => x.socket == socket
			)?.roomId;

			for (let i = 0; i < allSockets.length; i++) {
				if (allSockets[i].roomId == currentUserRoom) {
					allSockets[i].socket.send(parsedMessage.payload.message);
				}
			}
		}
	});
});
