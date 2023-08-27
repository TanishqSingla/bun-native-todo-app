import router from "./router";

Bun.serve({
  fetch(req) {
    return router.serve(req);
  }
})

console.log('server running on http://0.0.0.0:3000');
