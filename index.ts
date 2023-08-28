import Router from 'oven-router';

const router = new Router();

router.get("/healthcheck", (_req) => {
	return new Response("Healthy", {
		status: 200
	});
});

Bun.serve({
  fetch(req) {
		return router.serve(req);
  }
});
