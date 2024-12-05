import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default async function compileCss(filePath: string): Promise<string> {
  const plugins = [tailwindcss, autoprefixer, cssnano];
  const cssIn = await Deno.readTextFile(filePath);
  const cssOut = await postcss(plugins).process(cssIn, { from: undefined });

  return cssOut.toString();
}
