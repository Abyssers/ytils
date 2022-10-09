import { isFunc } from "../type/isFunc";

/**
 * Checks whether value is an anonymous function.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an anonymous function, else false
 * @example
 *
 * isAnonFunc(function () {})
 * // => true
 *
 * isAnonFunc(() => {})
 * // => true
 *
 * isAnonFunc(async function () {})
 * // => true
 *
 * isAnonFunc(async () => {})
 * // => true
 *
 * isAnonFunc(function* () {})
 * // => true
 *
 * isAnonFunc(async function* () {})
 * // => true
 *
 * isAnonFunc(function hello() {})
 * // => false
 */
export function isAnonFunc(value: any): boolean {
    return isFunc(value) && value.name === "";
}
