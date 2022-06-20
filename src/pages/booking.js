import bookingTemplate from './booking.marko';

export default async (app) => {
	app.get('/booking', (request, reply) => {
			reply.marko(bookingTemplate, {});
	});
};
