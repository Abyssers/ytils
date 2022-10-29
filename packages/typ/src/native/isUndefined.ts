/**
 * Checks whether value is undefined exactly.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is undefined exactly, else false
 * @example
 *
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined(null)
 * // => false
 *
 * isUndefined(NaN)
 * // => false
 */
export function isUndefined(value: any): value is undefined {
    return value === undefined;
}

export const isUndef = isUndefined;
