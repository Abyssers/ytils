import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is an integer or an integral Number object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an integer or an integral Number object, else false
 * @example
 *
 * isInt(6)
 * // => true
 *
 * isInt(Number.MAX_SAFE_INTEGER)
 * // => true
 *
 * isInt(new Number(1))
 * // => true
 *
 * isInt(6.66)
 * // => false
 *
 * isInt("6")
 * // => false
 *
 * isInt(NaN)
 * // => false
 *
 * isInt(new Number(NaN))
 * // => false
 */
export function isInt(value: any): value is number {
    return tagOf(value) === Tag.Number && Number.isInteger(+value);
}
