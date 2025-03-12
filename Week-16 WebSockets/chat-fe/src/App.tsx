import { useEffect, useRef, useState } from "react";

function App() {
	const [messages, setMessages] = useState(["hi", "Hello"]);
	const inputRef = useRef();
	const wsRef = useRef();

	useEffect(() => {
		const ws = new WebSocket("ws://localhost:8080");

		ws.onmessage = (event) => {
			setMessages((m) => [...m, event.data]);
		};

		wsRef.current = ws;

		ws.onopen = () => {
			ws.send(
				JSON.stringify({
					type: "join",
					payload: {
						roomId: "red",
					},
				})
			);
		};

		return () => {
			ws.close();
		};
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();
		const message = inputRef.current?.value;
		wsRef.current.send(
			JSON.stringify({
				type: "chat",
				payload: {
					message: message,
				},
			})
		);
	};

	return (
		<div className="h-screen w-screen bg-black flex flex-col justify-between">
			<div>
				{messages.map((message, index) => (
					<div key={index} className="my-8 mx-4">
						<span className="bg-white px-8 py-2 my-4">
							{message}
						</span>
					</div>
				))}
			</div>
			<form>
				<input
					type="text"
					placeholder="Type message"
					className="p-4 w-3/4"
					ref={inputRef}
				/>
				<button
					className="bg-purple-600 text-white p-4 rounded-r-sm w-1/4"
					onClick={sendMessage}>
					Send
				</button>
			</form>
		</div>
	);
}

export default App;
