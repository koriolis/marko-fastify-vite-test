import zlib from 'node:zlib';
import fastify from 'fastify';

export const app = fastify();

if (process.env.NODE_ENV === 'production') {
	app.register(import('@fastify/compress'), {
		zlibOptions: {
			flush: zlib.constants.Z_SYNC_FLUSH,
		},
		brotliOptions: {
			flush: zlib.constants.BROTLI_OPERATION_FLUSH,
		},
	});
}
app.setErrorHandler((error, req, reply) => {
	// Log error
	const statusCode = error.statusCode;
	if (statusCode >= 500) {
		req.log.error(error);
	} else if (statusCode >= 400) {
		req.log.info(error);
	} else {
		req.log.error(error);
	}
	// Send error response
	reply.send(error);
})
app.register(import('@marko/fastify').catch((error) => console.error(error)));
app.register(import('./pages/booking.js').catch((error) => console.error(error)));
