/**
 * Checks whether value is an Array object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an Array object, else false
 * @example
 *
 * isArray([])
 * // => true
 *
 * isArray(new Array(6))
 * // => true
 *
 * isArray({})
 * // => false
 *
 * isArray(6)
 * // => false
 *
 * isArray("6")
 * // => false
 */
export function isArray<T>(value: T[]): value is T[];
export function isArray(value: any): value is any[];
export function isArray(value: any): boolean {
    return Array.isArray(value);
}

export const isArr = isArray;
