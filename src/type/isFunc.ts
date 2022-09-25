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
 * isFunc(console.log)
 * // => true
 *
 * isFunc(Number)
 * // => true
 *
 * isFunc({})
 * // => false
 */
export function isFunc(value: any): boolean {
    return typeof value === "function" && isNaN(value.nodeType);
}
