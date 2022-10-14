const { resolve } = require("node:path");
const { spawnSync } = require("node:child_process");
const { existsSync, statSync, readdirSync } = require("node:fs");

function getRootPath() {
    return resolve(__dirname, "../../");
}

function getPkgsPath() {
    return resolve(getRootPath(), "packages");
}

function getRootPkgCfgs() {
    const rootPkgPath = resolve(getRootPath(), "package.json");
    if (!existsSync(rootPkgPath)) return {};
    return require(rootPkgPath);
}

function getSubPkgs() {
    if (!existsSync(getPkgsPath())) return [];
    return readdirSync(getPkgsPath())
        .map(name => {
            const path = resolve(getPkgsPath(), name);
            const pkgPath = resolve(path, "package.json");
            return {
                dirPath: path,
                dirName: name,
                pkgPath,
                pkgCfgs: existsSync(pkgPath) ? require(pkgPath) : {},
            };
        })
        .filter(({ dirPath }) => statSync(dirPath).isDirectory())
        .sort((a, b) => {
            return Object.keys(a.pkgCfgs?.dependencies || {}).includes(b.pkgCfgs.name) ? 1 : -1;
        });
}

function pnpm(args, options = { cwd: getRootPath() }) {
    switch (process.platform) {
        case "win32":
            spawnSync("pnpm.cmd", args, options);
            break;
        default:
            spawnSync("pnpm", args, options);
            break;
    }
}

function npx(args, options = { cwd: getRootPath() }) {
    switch (process.platform) {
        case "win32":
            spawnSync("npx.cmd", args, options);
            break;
        default:
            spawnSync("npx", args, options);
            break;
    }
}

function prettier(...files) {
    if (files.length === 0) return;
    npx(["prettier", "--write", ...files]);
}

module.exports = {
    getRootPath,
    getPkgsPath,
    getRootPkgCfgs,
    getSubPkgs,
    pnpm,
    npx,
    prettier,
};
