import {
	Pencil,
	Users,
	Download,
	Sparkles,
	Github,
	Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
			{/* Header */}
			<header className="p-4 border-b bg-white/50 backdrop-blur-sm fixed w-full z-50">
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center transform rotate-12">
							<Pencil className="w-6 h-6 text-white transform -rotate-12" />
						</div>
						<span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
							Sketchy
						</span>
					</div>
					<nav className="hidden md:flex space-x-8">
						<a
							href="#features"
							className="text-gray-600 hover:text-purple-600 transition-colors">
							Features
						</a>
						<a
							href="#templates"
							className="text-gray-600 hover:text-purple-600 transition-colors">
							Templates
						</a>
						<a
							href="#pricing"
							className="text-gray-600 hover:text-purple-600 transition-colors">
							Pricing
						</a>
						<a
							href="#blog"
							className="text-gray-600 hover:text-purple-600 transition-colors">
							Blog
						</a>
					</nav>
					<div className="flex items-center space-x-4">
						<Link href={"/login"}>
							<button className="px-4 py-2 text-purple-600 hover:text-purple-700 transition-colors">
								Log in
							</button>
						</Link>
						<Link href={"/canvas/123"}>
							<button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
								Start Drawing
							</button>
						</Link>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="pt-32 pb-20">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
							Draw, Collaborate, Create
						</h1>
						<p className="text-xl text-gray-600 mb-8">
							The simplest way to bring your ideas to life. Create
							beautiful diagrams, flowcharts, and sketches with
							our intuitive drawing tool.
						</p>
						<div className="flex justify-center space-x-4">
							<button className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
								<Sparkles className="w-5 h-5" />
								<span>Try Now - It's Free!</span>
							</button>
							<button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
								Watch Demo
							</button>
						</div>
					</div>

					{/* Interactive Demo */}
					<div className="relative">
						<div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
							<div className="aspect-video bg-gray-50 rounded-lg relative overflow-hidden">
								{/* Drawing Canvas Mockup */}
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-50 rounded-full blur-3xl opacity-30"></div>
								</div>
								<div className="absolute top-4 left-4 flex space-x-2">
									<div className="w-3 h-3 rounded-full bg-red-400"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
									<div className="w-3 h-3 rounded-full bg-green-400"></div>
								</div>
								{/* Sample Drawings */}
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="grid grid-cols-2 gap-8">
										<div className="w-40 h-40 border-4 border-purple-400 rounded-lg transform rotate-12"></div>
										<div className="w-40 h-40 bg-pink-400 rounded-full opacity-20"></div>
										<div className="w-40 h-40 border-4 border-dashed border-purple-400 transform -rotate-6"></div>
										<div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg opacity-20 transform rotate-45"></div>
									</div>
								</div>
							</div>
						</div>
						{/* Floating Elements */}
						<div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
							<div className="flex items-center space-x-2">
								<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
								<span className="text-sm font-medium">
									12 users collaborating
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-20 bg-white" id="features">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-black">
						<div className="p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-100">
							<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
								<Pencil className="w-6 h-6 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold mb-2 ">
								Intuitive Drawing
							</h3>
							<p className="text-gray-600">
								Create beautiful diagrams with our easy-to-use
								tools. No design experience needed.
							</p>
						</div>
						<div className="p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-100">
							<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
								<Users className="w-6 h-6 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold mb-2">
								Real-time Collaboration
							</h3>
							<p className="text-gray-600">
								Work together with your team in real-time. See
								changes as they happen.
							</p>
						</div>
						<div className="p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-100">
							<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
								<Download className="w-6 h-6 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold mb-2">
								Easy Export
							</h3>
							<p className="text-gray-600">
								Export your drawings in multiple formats
								including PNG, SVG, and PDF.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-50 py-12 border-t">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-4 mb-4 md:mb-0">
							<div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center transform rotate-12">
								<Pencil className="w-4 h-4 text-white transform -rotate-12" />
							</div>
							<span className="text-gray-600">
								© 2025 Sketchy. All rights reserved.
							</span>
						</div>
						<div className="flex space-x-6">
							<a
								href="#"
								className="text-gray-600 hover:text-purple-600 transition-colors">
								<Github className="w-6 h-6" />
							</a>
							<a
								href="#"
								className="text-gray-600 hover:text-purple-600 transition-colors">
								<Twitter className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
