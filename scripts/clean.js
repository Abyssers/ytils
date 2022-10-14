/**
 * Delete all directories named dist
 */
const { resolve } = require("path");
const { rmSync } = require("fs");
const { getRootPath, getSubPkgs } = require("./lib");

rmSync(`${resolve(getRootPath(), "dist")}`, { force: true, recursive: true });
getSubPkgs().forEach(({ dirPath }) => {
    rmSync(`${dirPath}/dist`, { force: true, recursive: true });
});
