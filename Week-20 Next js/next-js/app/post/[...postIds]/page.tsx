export default function PostPage({ params }) {
	const postIds = params.postIds;
	return <div>post Ids - {JSON.stringify(postIds)}</div>;
}
