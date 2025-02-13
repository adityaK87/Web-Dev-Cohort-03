"use client";
import TextInput from "@repo/ui/input";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<TextInput
				size="md"
				placeholder="Type..."
				onChange={() => {
					console.log("Type");
				}}></TextInput>
			<button
				style={{
					background: "blue",
					padding: "15px",
				}}
				onClick={() => {
					router.push("/chat/123");
				}}>
				Join Room
			</button>
		</div>
	);
}
