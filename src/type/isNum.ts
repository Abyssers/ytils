/**
 * Checks whether value is a number or a number object that can participate in effective calculation.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a number or a number object that can participate in effective calculation, else false
 * @example
 *
 * isNum(6)
 * // => true
 *
 * isNum(6.66)
 * // => true
 *
 * isNum(Infinity)
 * // => true
 *
 * isNum(new Number(1))
 * // => true
 *
 * isNum("6")
 * // => false
 *
 * isNum(NaN)
 * // => false
 *
 * isNum(new Number(NaN))
 * // => false
 */
export function isNum(value: any): boolean {
    return Object.prototype.toString.call(value) === "[object Number]" && !Number.isNaN(+value);
}
