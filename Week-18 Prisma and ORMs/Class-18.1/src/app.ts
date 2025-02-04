import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
	await client.user.create({
		data: {
			email: "adityapal@gmail.com",
			username: "Adityak87",
			password: "123@123",
		},
	});
}

main();
