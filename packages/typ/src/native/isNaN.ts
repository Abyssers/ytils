import { isNum } from "./isNum";

/**
 * Checks whether value is neither a number nor a Number object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is neither a number nor a Number object, else false
 * @example
 *
 * isNaN(NaN)
 * // => true
 *
 * isNaN("6")
 * // => true
 *
 * isNaN({})
 * // => true
 *
 * isNaN(new Number(NaN))
 * // => true
 *
 * isNaN(6.66)
 * // => false
 *
 * isNaN(Number.MAX_SAFE_INTEGER)
 * // => false
 *
 * isNaN(new Number(4))
 * // => false
 */
export function isNaN(value: any): value is Omit<any, keyof number> {
    return !isNum(value);
}
