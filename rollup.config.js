const json = require("@rollup/plugin-json");
const typescript = require("@rollup/plugin-typescript");
const strip = require("@rollup/plugin-strip");
const { terser } = require("rollup-plugin-terser");

module.exports = {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
        },
    ],
    plugins: [json(), typescript(), strip({ debugger: true }), terser()],
};
