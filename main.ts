import { Hono } from "hono";
import { toSSG, serveStatic } from "hono/deno";
import { join } from "@std/path";
import compileCss from "./src/lib/postcss.ts";
// import Layout from "./src/layouts/Layout.tsx";

function setupRoutes(app: Hono) {
  app.get("/", (c) => {
    return c.html("<Layout />");
  });

  app.get("/css/main.css", async (c) => {
    const filePath = join(import.meta.dirname, `src/assets/css/main.css`);
    const css = await compileCss(filePath);

    c.header("Content-Type", "text/css");
    c.status(200);

    return c.body(css);
  });
}

export const app = new Hono();
const isDev = Deno.env.get("DENO_ENV") === "development";

if (isDev) {
  setupRoutes(app);
} else {
  const ssgApp = new Hono();
  const staticGenDir = join(import.meta.dirname, "static-gen");

  setupRoutes(ssgApp);
  toSSG(ssgApp, { dir: staticGenDir });
  app.use("*", serveStatic({ root: staticGenDir }));
}

if (import.meta.main) {
  Deno.serve(app.fetch);
}
