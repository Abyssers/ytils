import { isNum } from "./isNum";
import { isInt } from "./isInt";

/**
 * Checks whether value is a float or a floating-point number object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a float or a floating-point number object, else false
 * @example
 *
 * isFloat(6.66)
 * // => true
 *
 * isFloat(new Number(6.66))
 * // => true
 *
 * isFloat(6)
 * // => false
 *
 * isFloat(Number.MAX_SAFE_INTEGER)
 * // => false
 *
 * isFloat("6")
 * // => false
 *
 * isFloat(NaN)
 * // => false
 *
 * isFloat(new Number(NaN))
 * // => false
 */
export function isFloat(value: any): boolean {
    return isNum(value) && !isInt(value);
}
