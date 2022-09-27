import { isBool } from "../type/isBool";
import { isFunc } from "../type/isFunc";
import { isNum } from "../type/isNum";
import { isStr } from "../type/isStr";
import { isStrictNaN } from "../type/isStrictNaN";
import { isTypeEqual } from "./isTypeEqual";

/**
 * Checks whether lhs and rhs are equal on primitive value and with the same type.
 * @param {any} lhs The left-hand side
 * @param {any} rhs The right-hand side
 * @returns {boolean} Returns true if lhs and rhs are equal on primitive value and with the same type, else false
 * @example
 *
 * isEqual(6, 6)
 * // true
 *
 * isEqual("6", new String("6"))
 * // true
 *
 * isEqual(6, "6")
 * // => false
 *
 * isEqual({}, {})
 * // => false
 *
 * isEqual([], [])
 * // => false
 */
export function isEqual(lhs: any, rhs: any): boolean {
    if (!isTypeEqual(lhs, rhs)) return false;
    if (isStrictNaN(lhs) && isStrictNaN(rhs)) return true;
    if (isNum(lhs)) return +lhs === +rhs;
    if (isBool(lhs) || isStr(lhs)) return lhs == rhs;
    if (isFunc(lhs)) return lhs.toString() === rhs.toString();
    return lhs === rhs;
}
