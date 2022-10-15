/**
 * Checks whether value is an Array object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an Array object, else false
 * @example
 *
 * isArr([])
 * // => true
 *
 * isArr(new Array(6))
 * // => true
 *
 * isArr({})
 * // => false
 *
 * isArr(6)
 * // => false
 *
 * isArr("6")
 * // => false
 */
export function isArr<T>(value: any): value is Array<T> {
    return Array.isArray(value);
}
