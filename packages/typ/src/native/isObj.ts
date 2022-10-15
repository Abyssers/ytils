/**
 * Checks whether value is an object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an object, else false
 * @example
 *
 * isObj([])
 * // => true
 *
 * isObj({})
 * // => true
 *
 * isObj(6)
 * // => false
 *
 * isObj("6")
 * // => false
 *
 * isObj(new String("6"))
 * // => true
 */
export function isObj(value: any): value is object | ((...args: any[]) => any) {
    return value != null && (typeof value === "object" || typeof value === "function");
}
