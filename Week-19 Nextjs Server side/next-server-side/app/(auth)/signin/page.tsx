"use client";
import axios from "axios";
import { useRef } from "react";

export default function Signin() {
	const userRef = useRef<HTMLInputElement>();
	const passwordRef = useRef<HTMLInputElement>();
	return (
		<div className="flex flex-col gap-3 justify-center items-center w-screen h-screen  bg-white">
			<div className="flex flex-col gap-4 bg-black p-8 rounded-md ">
				<input
					type="text"
					placeholder="Username"
					className="p-2 text-black"
					ref={userRef}
				/>
				<input
					type="password"
					placeholder="password"
					className="p-2 text-black"
					ref={passwordRef}
				/>
				<button
					className="bg-blue-700 p-2"
					onClick={async () => {
						const res = await axios.post(
							"http://localhost:3000/api/v1/user",
							{
								username: userRef.current.value,
								password: passwordRef.current.value,
							}
						);
						console.log(res);
					}}>
					Sign In
				</button>
			</div>
		</div>
	);
}
