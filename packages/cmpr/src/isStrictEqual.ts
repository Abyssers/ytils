/**
 * Checks whether lhs and rhs are equal by ===, but in addition to NaN.
 * @param {any} lhs The left-hand side
 * @param {any} rhs The right-hand side
 * @returns {boolean} Returns true if lhs === rhs or both lhs and rhs are NaN, else false
 * @example
 *
 * isStrictEqual(6, 6)
 * // true
 *
 * isStrictEqual(NaN, NaN)
 * // true
 *
 * isStrictEqual("6", "6")
 * // true
 *
 * isStrictEqual(6, "6")
 * // => false
 *
 * isStrictEqual({}, {})
 * // => false
 *
 * isStrictEqual([], [])
 * // => false
 */
export function isStrictEqual(lhs: any, rhs: any): boolean {
    return lhs === rhs || (lhs !== lhs && rhs !== rhs);
}

export const isStrictEq = isStrictEqual;
