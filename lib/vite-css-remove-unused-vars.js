export default function () {
  let config;

  return {
    name: "vite-css-remove-unused-vars",
    configResolved: (c) => (config = c),
    transform(code, fileName) {
      if (config.command !== "build" || !fileName.endsWith(".css")) {
        return;
      }

      const removedVars = [];

      code.split(";").forEach((line) => {
        if (!line.startsWith("--")) {
          return;
        }

        const varDef = line.split("}")[0];
        const varName = varDef.split(":")[0];
        const useNum = code.split(`var(${varName})`).length - 1;

        if (useNum === 0) {
          const varDefSemi = `${varDef};`;
          code = code.replace(varDefSemi, "");

          removedVars.push(varDefSemi);
        }
      });

      const savedNum = removedVars.length;
      const savedKB = Math.round(
        Math.floor(removedVars.join("").length / 1024),
      );

      if (savedNum > 0) {
        config.logger.info(
          `CSS Remove Unused Vars - ${savedNum} removed (${savedKB}kb saved)`,
        );
      }

      return { code };
    },
  };
}
