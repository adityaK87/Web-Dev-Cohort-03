const main: ExportedHandler<Env> = {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('Hello World!');
	},
};
export default main;
