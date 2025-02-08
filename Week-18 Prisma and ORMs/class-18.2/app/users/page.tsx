import axios from "axios";

export default async function Users() {
	const users = await axios.get("https://jsonplaceholder.typicode.com/posts");
	return <div>{JSON.stringify(users.data)}</div>;
}
