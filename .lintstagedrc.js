/**
 * configuration: https://github.com/okonet/lint-staged#Configuration
 */
module.exports = {
    "*.{js,ts}": ["eslint --fix", "prettier --write"],
    "*.{json,jsonc}": ["prettier --write"],
    "*.{yml,yaml}": ["prettier --write"],
    "*.{md,markdown}": ["markdownlint-cli2", "prettier --write"],
};
