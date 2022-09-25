const json = require("@rollup/plugin-json");
const typescript = require("@rollup/plugin-typescript");
const strip = require("@rollup/plugin-strip");

module.exports = {
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "cjs",
    },
    plugins: [json(), typescript(), strip({ debugger: true })],
};
