/**
 * Checks whether value is a string or a String object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a string or a String object, else false
 * @example
 *
 * isStr("6")
 * // => true
 *
 * isStr(new String("6"))
 * // => true
 *
 * isStr(6)
 * // => false
 *
 * isStr(["6"])
 * // => false
 *
 * isStr({})
 * // => false
 */
export function isStr(value: any): boolean {
    return Object.prototype.toString.call(value) === "[object String]";
}
