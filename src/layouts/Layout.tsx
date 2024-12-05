import type { FC } from "hono/jsx";

const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="/css/main.css" />
      </head>
      <body>
        <h1 class="text-2xl">foo bar batzy</h1>
      </body>
    </html>
  );
};

export default Layout;
