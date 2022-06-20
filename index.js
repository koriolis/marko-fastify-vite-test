const { NODE_ENV = 'development', HOST = 'localhost', PORT = 3000 } = process.env;
console.time('Start');

let address;
if (NODE_ENV === 'production') {
	// In production, simply start up the fastify server.
	const { app } = await import('./dist/index.js');
	console.log('hello');
	address = await app.listen(
		{
			port: PORT,
			host: HOST,
		},
		(err, address) => {
			if (err) {
				console.error(err);
			} else {
				console.log(`Server listening on ${address}`);
			}
		}
	);
} else {
	// In dev we'll start a Vite dev server in middleware mode,
	// and forward requests to our fastify server.
	const { once } = await import('node:events');
	const { createServer } = await import('vite');
	const devServer = await createServer({
		server: { middlewareMode: 'ssr' },
	});
	const server = devServer.middlewares
		.use(async (req, res, next) => {
			try {
				const { app } = await devServer.ssrLoadModule('./src/index.js');
				await app.ready();
				app.routing(req, res);
				next();
			} catch (err) {
				devServer.ssrFixStacktrace(err);
				return next(err);
			}
		})
		.listen(PORT);

	await once(server, 'listening');
	address = `http://localhost:${server.address().port}`;
}

console.timeEnd('Start');
console.log(`Env: ${NODE_ENV}`);
console.log(`Address: ${address}`);
