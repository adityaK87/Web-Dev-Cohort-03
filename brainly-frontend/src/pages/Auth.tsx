import { useState } from "react";
import { Button } from "../components/Button";
import Input from "../components/Input";

const Auth = () => {
	const [isSignInform, setIsSignInform] = useState(true);
	return (
		<div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
			<div className="bg-white rounded p-4 min-w-52 flex flex-col justify-center">
				<Input placeholder="username" />
				<Input placeholder="password" />
				<p>
					{isSignInform ? (
						<Button
							size="md"
							text="SIGN IN"
							variant="primary"
							fullWidth={true}
							loading={false}
						/>
					) : (
						<Button
							size="md"
							text="SIGN UP"
							variant="primary"
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
