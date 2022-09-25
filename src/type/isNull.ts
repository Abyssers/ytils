/**
 * Checks whether value is null exactly.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is null exactly, else false
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(undefined)
 * // => false
 *
 * isNull(NaN)
 * // => false
 */
export function isNull(value: any): boolean {
    return value === null;
}
