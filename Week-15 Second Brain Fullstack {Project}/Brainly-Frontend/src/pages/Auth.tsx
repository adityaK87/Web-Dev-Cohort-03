import { useRef, useState } from "react";
import { Button } from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Auth = () => {
	const [isSignInform, setIsSignInform] = useState(true);
	const usernameRef = useRef<HTMLInputElement>();
	const passwordRef = useRef<HTMLInputElement>();
	const navigate = useNavigate();

	async function signup() {
		const username = usernameRef.current?.value;
		const password = passwordRef.current?.value;

		await axios.post(BACKEND_URL + "/api/v1/signup", {
			username,
			password,
		});

		const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
			username,
			password,
		});

		const jwt = response.data.token;
		if (jwt) {
			localStorage.setItem("token", jwt);
			navigate("/dashboard");
		}
	}

	async function signin() {
		const username = usernameRef.current?.value;
		const password = passwordRef.current?.value;

		const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
			username,
			password,
		});
		const jwt = response.data.token;
		if (jwt) {
			localStorage.setItem("token", jwt);
			navigate("/dashboard");
		}
	}

	return (
		<div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
			<div className="bg-white rounded p-4 min-w-52 flex flex-col justify-center">
				<Input reference={usernameRef} placeholder="username" />
				<Input reference={passwordRef} placeholder="password" />
				<p>
					{isSignInform ? (
						<Button
							size="md"
							text="SIGN IN"
							variant="primary"
							onClick={signin}
							fullWidth={true}
							loading={false}
						/>
					) : (
						<Button
							size="md"
							text="SIGN UP"
							variant="primary"
							onClick={signup}
							fullWidth={true}
							loading={false}
						/>
					)}
				</p>
				{isSignInform ? (
					<p className="my-2">
						Register user{" "}
						<span
							className="text-purple-600 underline cursor-pointer"
							onClick={() => setIsSignInform(!isSignInform)}>
							sign up!
						</span>
					</p>
				) : (
					<p className="my-2">
						User already exist{" "}
						<span
							className="text-purple-600 underline cursor-pointer"
							onClick={() => setIsSignInform(!isSignInform)}>
							sign in!
						</span>
					</p>
				)}
			</div>
		</div>
	);
};

export default Auth;
