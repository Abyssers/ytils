import { isInt } from "./isInt";

/**
 * Checks whether value is an array-like.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an array-like, else false
 * @example
 *
 * isArrLike([])
 * // => true
 *
 * isArrLike(new Array(6))
 * // => true
 *
 * isArrLike("6")
 * // => true
 *
 * isArrLike({})
 * // => false
 *
 * isArrLike(6)
 * // => false
 */
export function isArrLike<T>(value: any): value is ArrayLike<T> {
    return (
        value != null &&
        typeof value !== "function" &&
        isInt(value.length) &&
        value.length > -1 &&
        value.length <= Number.MAX_SAFE_INTEGER
    );
}
