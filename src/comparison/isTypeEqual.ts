import { tagOf } from "../core/tag";

/**
 * Checks whether lhs and rhs are of the same type.
 * @param {any} lhs The left-hand side
 * @param {any} rhs The right-hand side
 * @returns {boolean} Returns true if lhs and rhs are of the same type, else false
 * @example
 *
 * isTypeEqual(6, 6)
 * // true
 *
 * isTypeEqual(6, new Number(6))
 * // => true
 *
 * isTypeEqual("6", "6")
 * // true
 *
 * isTypeEqual({}, {})
 * // => true
 *
 * isTypeEqual([], [])
 * // => true
 *
 * isTypeEqual(6, "6")
 * // => false
 */
export function isTypeEqual(lhs: any, rhs: any): boolean {
    return tagOf(lhs) === tagOf(rhs);
}
