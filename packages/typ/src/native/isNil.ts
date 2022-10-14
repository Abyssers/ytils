/**
 * Checks whether value is undefined or null.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is undefined or null, else false
 * @example
 *
 * isNil(undefined)
 * // => true
 *
 * isNil(null)
 * // => true
 *
 * isNil(NaN)
 * // => false
 */
export function isNil(value: any): value is undefined | null {
    return value === undefined || value === null;
}
