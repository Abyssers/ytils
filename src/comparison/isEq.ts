import { tagOf, TypeTag } from "../.core/tag";
import { isFunc } from "../type/isFunc";
import { isStrictEq } from "./isStrictEq";

/**
 * Checks whether lhs and rhs are equal on primitive value and with the same type.
 * @param {any} lhs The left-hand side
 * @param {any} rhs The right-hand side
 * @returns {boolean} Returns true if lhs and rhs are equal on primitive value and with the same type, else false
 * @example
 *
 * isEq(6, 6)
 * // true
 *
 * isEq(6, new Number(6))
 * // true
 *
 * isEq("6", new String("6"))
 * // true
 *
 * isEq(new Date(31415926), new Date(31415926))
 * // => true
 *
 * isEq(6, "6")
 * // => false
 *
 * isEq({}, {})
 * // => false
 *
 * isEq([], [])
 * // => false
 */
export function isEq(lhs: any, rhs: any): boolean {
    if (isStrictEq(lhs, rhs)) return true;
    const tag = tagOf(lhs);
    if (tag !== tagOf(rhs)) return false;
    if (tag === TypeTag.Number || tag === TypeTag.Boolean || tag === TypeTag.String) return lhs == rhs;
    if (tag === TypeTag.Date) return isStrictEq(lhs.getTime(), rhs.getTime());
    if (isFunc(lhs)) return lhs.toString() === rhs.toString();
    return lhs === rhs;
}
