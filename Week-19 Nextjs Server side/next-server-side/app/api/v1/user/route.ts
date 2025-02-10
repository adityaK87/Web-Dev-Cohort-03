import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prismaClient = new PrismaClient();
export async function GET() {
	return NextResponse.json({
		username: "Aditya Pal",
		password: "Password",
		email: "aditya@gmail.com",
	});
}

export async function POST(req: NextRequest) {
	const data = await req.json();

	console.log("Print Body", data);
	const user = await prismaClient.user.create({
		data: {
			username: data.username,
			password: data.password,
		},
	});

	return NextResponse.json(
		{
			message: "user created successfully",
			user: user,
		},
		{ status: 200 }
	);
}
