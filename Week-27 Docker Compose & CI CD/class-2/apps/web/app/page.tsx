import { prismaClient } from "@repo/db/client";

export default async function Home() {
	const users = await prismaClient.user.findMany();
	return <div>{JSON.stringify(users)}</div>;
}
export const dynamic = "force-dynamic";

// export const revalidate = 60 // revalidate every 60 seconds
