/**
 * Delete all directories named dist
 */
const { resolve, relative } = require("path");
const { rmSync } = require("fs");
const { getRootPath, getSubPkgs } = require("./lib");

[`${resolve(getRootPath(), "dist")}`, ...getSubPkgs().map(({ dirPath }) => `${dirPath}/dist`)].forEach(path => {
    console.log(`removed ${relative(getRootPath(), path)}`);
    rmSync(path, { force: true, recursive: true });
});
