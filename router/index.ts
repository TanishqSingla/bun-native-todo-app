import Router from "../utils/router";

const router = new Router();

router.get("/hello", (_req: Request) => {
  return new Response("Hello world")
});

export default router;
