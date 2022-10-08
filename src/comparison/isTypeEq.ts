import { tagOf } from "../.internal/tag";

/**
 * Checks whether lhs and rhs are of the same type.
 * @param {any} lhs The left-hand side
 * @param {any} rhs The right-hand side
 * @returns {boolean} Returns true if lhs and rhs are of the same type, else false
 * @example
 *
 * isTypeEq(6, 6)
 * // true
 *
 * isTypeEq(6, new Number(6))
 * // => true
 *
 * isTypeEq("6", "6")
 * // true
 *
 * isTypeEq({}, {})
 * // => true
 *
 * isTypeEq([], [])
 * // => true
 *
 * isTypeEq(6, "6")
 * // => false
 */
export function isTypeEq(lhs: any, rhs: any): boolean {
    return tagOf(lhs) === tagOf(rhs);
}
