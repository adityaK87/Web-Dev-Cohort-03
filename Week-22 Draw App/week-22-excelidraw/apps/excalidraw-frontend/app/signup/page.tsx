"use client";
import React, { useState } from "react";
import { Pencil, UserPlus, Mail, Lock, User } from "lucide-react";
import Link from "next/link";

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle signup logic here
		console.log("Signup attempt:", { name, email, password });
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col">
			{/* Header */}
			<header className="p-4">
				<div className="max-w-7xl mx-auto">
					<Link
						href="/"
						className="flex items-center space-x-3 w-fit">
						<div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center transform rotate-12">
							<Pencil className="w-6 h-6 text-white transform -rotate-12" />
						</div>
						<span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
							Sketchy
						</span>
					</Link>
				</div>
			</header>

			{/* Signup Form */}
			<div className="flex-1 flex items-center justify-center px-4 py-12">
				<div className="max-w-md w-full space-y-8">
					<div className="text-center">
						<h2 className="text-4xl font-bold text-gray-900">
							Create your account
						</h2>
						<p className="mt-2 text-gray-600">
							Start creating amazing diagrams today
						</p>
					</div>

					<form
						onSubmit={handleSubmit}
						className="mt-8 space-y-6 bg-white p-8 rounded-2xl shadow-lg">
						<div className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700">
									Full name
								</label>
								<div className="mt-1 relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<User className="h-5 w-5 text-gray-400" />
									</div>
									<input
										id="name"
										name="name"
										type="text"
										autoComplete="name"
										required
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
										className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
										placeholder="John Doe"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700">
									Email address
								</label>
								<div className="mt-1 relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Mail className="h-5 w-5 text-gray-400" />
									</div>
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
										placeholder="you@example.com"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700">
									Password
								</label>
								<div className="mt-1 relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Lock className="h-5 w-5 text-gray-400" />
									</div>
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="new-password"
										required
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
										placeholder="••••••••"
									/>
								</div>
							</div>
						</div>

						<div className="flex items-center">
							<input
								id="terms"
								name="terms"
								type="checkbox"
								required
								className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
							/>
							<label
								htmlFor="terms"
								className="ml-2 block text-sm text-gray-700">
								I agree to the{" "}
								<a
									href="#"
									className="text-purple-600 hover:text-purple-500">
									Terms of Service
								</a>{" "}
								and{" "}
								<a
									href="#"
									className="text-purple-600 hover:text-purple-500">
									Privacy Policy
								</a>
							</label>
						</div>

						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors">
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
									<UserPlus className="h-5 w-5 text-purple-300 group-hover:text-purple-200" />
								</span>
								Create account
							</button>
						</div>
					</form>

					<p className="text-center text-sm text-gray-600">
						Already have an account?{" "}
						<Link
							href="/login"
							className="font-medium text-purple-600 hover:text-purple-500">
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signup;
