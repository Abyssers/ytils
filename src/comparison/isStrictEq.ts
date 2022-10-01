/**
 * Checks whether lhs and rhs are equal by ===, but in addition to NaN.
 * @param {any} lhs The left-hand side
 * @param {any} rhs The right-hand side
 * @returns {boolean} Returns true if lhs === rhs, else false
 * @example
 *
 * isStrictEq(6, 6)
 * // true
 *
 * isStrictEq(NaN, NaN)
 * // true
 *
 * isStrictEq("6", "6")
 * // true
 *
 * isStrictEq(6, "6")
 * // => false
 *
 * isStrictEq({}, {})
 * // => false
 *
 * isStrictEq([], [])
 * // => false
 */
export function isStrictEq(lhs: any, rhs: any): boolean {
    return lhs === rhs || (lhs !== lhs && rhs !== rhs);
}
