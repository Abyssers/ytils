/**
 * Checks whether value is undefined exactly.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is undefined exactly, else false
 * @example
 *
 * isUndef(undefined)
 * // => true
 *
 * isUndef(null)
 * // => false
 *
 * isUndef(NaN)
 * // => false
 */
export function isUndef(value: any): boolean {
    return value === undefined;
}
