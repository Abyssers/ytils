/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
    preset: "ts-jest",
    testEnvironment: "node",

    clearMocks: true,

    collectCoverage: true,
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["node_modules/"],

    moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx"],

    testMatch: ["<rootDir>/src/**/__tests__/**/*.[jt]s?(x)", "<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)"],
    testPathIgnorePatterns: ["node_modules/"],

    transformIgnorePatterns: ["node_modules/"],
};
