"use client";

import { initDraw } from "@/draw";
import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";
import { WS_URL } from "../config";

export function RoomCanvas({ roomId }: { roomId: string }) {
	const [socket, setSocket] = useState<WebSocket | null>(null);

	useEffect(() => {
		const ws = new WebSocket(
			`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmZWNkZjc2MC1hYTlhLTQ4MWMtYTgxMS1jMzcwNzc4NGU3YmQiLCJpYXQiOjE3Mzk5NTI1MTV9.7ufh6T6hyP-tfT-Dkv6F9-CvtAt8GgeZ96VlawYWnDQ`
		);

		ws.onopen = () => {
			setSocket(ws);
			const data = JSON.stringify({
				type: "join_room",
				roomId,
			});
			console.log(data);
			ws.send(data);
		};
	}, []);

	if (!socket) {
		return <div>Connecting to server....</div>;
	}

	return (
		<div>
			<Canvas roomId={roomId} socket={socket} />
		</div>
	);
}
