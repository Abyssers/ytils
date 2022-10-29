/* eslint-disable @typescript-eslint/ban-types */
/**
 * Checks whether value is an object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an object, else false
 * @example
 *
 * isObject([])
 * // => true
 *
 * isObject({})
 * // => true
 *
 * isObject(6)
 * // => false
 *
 * isObject("6")
 * // => false
 *
 * isObject(new String("6"))
 * // => true
 */
export function isObject<T extends object>(value: T): value is T;
export function isObject<P extends any[], R>(value: (...args: P) => R): value is (...args: P) => R;
export function isObject(value: any): value is object | ((...args: any) => any);
export function isObject(value: any): boolean {
    return value != null && (typeof value === "object" || typeof value === "function");
}

export const isObj = isObject;
