import { Application, Context, HttpError, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

// Router
const router = new Router();
router
  .post("/hello", (ctx) => {
    ctx.response.body = "Hello Post";
  })
  .get("/hello", (ctx) => {
    ctx.response.body = "Hello Get";
  });

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// User router
app.use(router.routes());
app.use(router.allowedMethods());

// Static
app.use(async (ctx) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/public`,
      index: "index.html",
    });
  } catch (err) {
    // Fallback
    if (err instanceof HttpError) {
      await ctx.send({
        root: `${Deno.cwd()}/public`,
        path: "index.html",
      });
    } else throw err;
  }
});

// Listen log
app.addEventListener("listen", ({ hostname, port }) => {
  console.log(`Start listening on ${hostname}:${port}`);
});

await app.listen({ hostname: "127.0.0.1", port: 8000 });
