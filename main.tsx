import { Hono } from "hono";
//import { Layout } from "./Layout.tsx";

export const app = new Hono();

app.get("/", (c) => {
  return c.html("<Layout />");
});

if (import.meta.main) {
  Deno.serve(app.fetch);
}
