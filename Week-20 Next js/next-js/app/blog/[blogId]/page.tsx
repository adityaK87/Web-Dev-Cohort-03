export default async function Blogpage({ params }) {
	const blogId = (await params).blogId;

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${blogId}`
	);

	const data = await res.json();

	return (
		<div>
			Blog page - {blogId}
			<div>Title - {data.title}</div>
			<div>Body - {data.body}</div>
		</div>
	);
}
