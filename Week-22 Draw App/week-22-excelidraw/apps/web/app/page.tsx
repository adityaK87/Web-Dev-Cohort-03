"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
	const [roomId, setRoomId] = useState();
	const router = useRouter();
	return (
		<div className={styles.page}>
			<div
				style={{
					display: "flex",
					gap: "10px",
				}}>
				<input
					style={{
						padding: 10,
					}}
					value={roomId}
					onChange={(e) => {
						setRoomId(e.target.value);
					}}
					type="text"
					placeholder="Room id"></input>
				<button
					style={{ padding: 10 }}
					onClick={() => {
						router.push(`/room/${roomId}`);
					}}>
					Join room
				</button>
			</div>
		</div>
	);
}
