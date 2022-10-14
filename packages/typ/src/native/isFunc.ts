import { isNaN } from "./isNaN";

/**
 * Checks whether value is a function.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a function, else false
 * @example
 *
 * isFunc(function () {})
 * // => true
 *
 * isFunc(() => {})
 * // => true
 *
 * isFunc(async function () {})
 * // => true
 *
 * isFunc(async () => {})
 * // => true
 *
 * isFunc(function* () {})
 * // => true
 *
 * isFunc(async function* () {})
 * // => true
 */
export function isFunc(value: any): value is ((...args: any[]) => any) | GeneratorFunction | AsyncGeneratorFunction {
    return typeof value === "function" && isNaN(value.nodeType);
}
