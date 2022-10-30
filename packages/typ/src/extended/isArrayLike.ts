import { isInteger } from "./isInteger";

/**
 * Checks whether value is an array-like.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an array-like, else false
 * @example
 *
 * isArrayLike([])
 * // => true
 *
 * isArrayLike(new Array(6))
 * // => true
 *
 * isArrayLike("6")
 * // => true
 *
 * isArrayLike({})
 * // => false
 *
 * isArrayLike(6)
 * // => false
 */
export function isArrayLike<T>(value: ArrayLike<T>): value is ArrayLike<T>;
export function isArrayLike(value: any): value is ArrayLike<any>;
export function isArrayLike(value: any): boolean {
    return (
        value != null &&
        typeof value !== "function" &&
        isInteger(value.length) &&
        value.length > -1 &&
        value.length <= Number.MAX_SAFE_INTEGER
    );
}

export const isArrLike = isArrayLike;
