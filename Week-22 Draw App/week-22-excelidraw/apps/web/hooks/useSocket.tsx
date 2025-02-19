import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export const useSocket = () => {
	const [loading, setLoading] = useState(true);
	const [socket, setSocket] = useState<WebSocket>();

	useEffect(() => {
		const ws = new WebSocket(
			`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmZWNkZjc2MC1hYTlhLTQ4MWMtYTgxMS1jMzcwNzc4NGU3YmQiLCJpYXQiOjE3Mzk5NTI1MTV9.7ufh6T6hyP-tfT-Dkv6F9-CvtAt8GgeZ96VlawYWnDQ`
		);
		ws.onopen = () => {
			setLoading(false);
			setSocket(ws);
		};
	}, []);

	return { loading, socket };
};
