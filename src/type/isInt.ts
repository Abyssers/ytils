/**
 * Checks whether value is a integer or a integral Number object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a integer or a integral Number object, else false
 * @example
 *
 * isInt(6)
 * // => true
 *
 * isInt(Number.MAX_SAFE_INTEGER)
 * // => true
 *
 * isInt(new Number(1))
 * // => true
 *
 * isInt(6.66)
 * // => false
 *
 * isInt("6")
 * // => false
 *
 * isInt(NaN)
 * // => false
 *
 * isInt(new Number(NaN))
 * // => false
 */
export function isInt(value: any): boolean {
    return Object.prototype.toString.call(value) === "[object Number]" && Number.isInteger(+value);
}
