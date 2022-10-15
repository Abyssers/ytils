/**
 * Setup the common pkg info and configs for each subpackage.
 */
const { resolve } = require("path");
const { existsSync, writeFileSync, readFileSync, mkdirSync } = require("fs");
const { getRootPath, getPkgsPath, getRootPkgCfgs, getSubPkgs, prettier } = require("./lib");

const filesNeeded2BeFormatted = [];
const rootPath = getRootPath();
const rootPkgCfgs = getRootPkgCfgs();

mkdirSync(resolve(getPkgsPath(), rootPkgCfgs.name), { recursive: true });
getSubPkgs().forEach(({ dirPath, dirName, pkgPath: subPkgPath, pkgCfgs: subPkgCfgs }) => {
    /* package.json */
    subPkgCfgs["main"] = "dist/index.js";
    subPkgCfgs["module"] = "dist/index.esm.js";
    subPkgCfgs["typings"] = "dist/index.d.ts";
    subPkgCfgs["files"] = ["dist", "LICENSE", "package.json", "README.md"];
    ["engines", "type", "author", "keywords", "repository", "license", "bugs"].forEach(key => {
        subPkgCfgs[key] = rootPkgCfgs[key];
    });
    if (dirName !== rootPkgCfgs.name) {
        /* subpackage unique configuration */
        subPkgCfgs["name"] = `@${rootPkgCfgs.name}/${dirName}`;
        delete subPkgCfgs["scripts"];
    } else {
        /* collection package unique configuration */
        subPkgCfgs["name"] = rootPkgCfgs.name;
    }
    writeFileSync(subPkgPath, JSON.stringify(subPkgCfgs), { encoding: "utf8" });
    filesNeeded2BeFormatted.push(subPkgPath);
    /* LICENSE */
    if (existsSync(resolve(rootPath, "LICENSE"))) {
        writeFileSync(resolve(dirPath, "LICENSE"), readFileSync(resolve(rootPath, "LICENSE"), { encoding: "utf8" }), {
            encoding: "utf8",
        });
    }
});

prettier(...filesNeeded2BeFormatted);
