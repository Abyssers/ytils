const { relative } = require("node:path");
const { green, bgGreen } = require("colors");
const { defineConfig } = require("rollup");
const json = require("@rollup/plugin-json");
const strip = require("@rollup/plugin-strip");
const typescript = require("rollup-plugin-typescript2");
const { terser } = require("rollup-plugin-terser");
const { getRootPath, getSubPkgs } = require("./scripts/lib");

console.log(
    bgGreen(" PACKING ORDER "),
    getSubPkgs()
        .map(({ dirName }) => green.bold(dirName))
        .join(green(" --> "))
);

module.exports = defineConfig(
    getSubPkgs().map(({ dirPath }) => {
        const subPkgRelPath = relative(getRootPath(), dirPath);
        return {
            input: `${subPkgRelPath}/src/index.ts`,
            output: [
                {
                    file: `${subPkgRelPath}/dist/index.js`,
                    format: "cjs",
                },
                {
                    file: `${subPkgRelPath}/dist/index.esm.js`,
                    format: "esm",
                },
            ],
            plugins: [
                json(),
                typescript({
                    tsconfig: "tsconfig.json",
                    tsconfigOverride: {
                        compilerOptions: {
                            rootDir: `${subPkgRelPath}/src`,
                        },
                        include: ["types/**/*.d.ts", "src/**/*.ts"],
                        exclude: ["src/**/*.test.ts"],
                    },
                }),
                strip({ debugger: false }),
                terser(),
            ],
        };
    })
);
