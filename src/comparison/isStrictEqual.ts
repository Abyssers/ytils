/**
 * Semantic function of ===.
 * @param {any} lhs The left-hand side
 * @param {any} rhs The right-hand side
 * @returns {boolean} Returns true if lhs === rhs, else false
 * @example
 *
 * isStrictEqual(6, 6)
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
    return lhs === rhs;
}
