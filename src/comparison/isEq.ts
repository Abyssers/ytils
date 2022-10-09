import { tagOf, TypeTag } from "../.internal/tag";
import { isFunc } from "../type/isFunc";
import { isStrictEq } from "./isStrictEq";

/**
 * Checks whether lhs and rhs are equal deeply on primitive value and with the same type.
 * Notice: Perform strict comparisons for functions and symbols
 * @param {any} lhs The left-hand side
 * @param {any} rhs The right-hand side
 * @returns {boolean} Returns true if lhs and rhs are equal deeply on primitive value and with the same type, else false
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
 * isEq(/abc/gi, new RegExp("abc", "gi"))
 * // => true
 *
 * const sym = Symbol(6)
 * isEq(sym, sym)
 * // => true
 *
 * isEq({}, {})
 * // => true
 *
 * isEq([], [])
 * // => true
 *
 * isEq(6, "6")
 * // => false
 */
export function isEq(lhs: any, rhs: any): boolean {
    if (isStrictEq(lhs, rhs)) return true; // for null, undefined and NaN
    const tag = tagOf(lhs);
    if (tag !== tagOf(rhs)) return false;
    if (tag === TypeTag.Number || tag === TypeTag.Boolean || tag === TypeTag.String) return lhs == rhs;
    if (tag === TypeTag.Date) return isStrictEq(lhs.getTime(), rhs.getTime());
    if (tag === TypeTag.RegExp)
        return lhs.source === rhs.source && lhs.flags === rhs.flags && lhs.lastIndex === rhs.lastIndex;
    if (tag === TypeTag.Symbol || isFunc(lhs)) return false;
    if (tag === TypeTag.Array) {
        if (lhs.length !== rhs.length) return false;
        for (let i = lhs.length - 1; i >= 0; i--) {
            if (!isEq(lhs[i], rhs[i])) return false;
        }
        return true;
    }
    if (tag === TypeTag.Set || tag === TypeTag.WeakSet || tag === TypeTag.Map || tag === TypeTag.WeakMap)
        return isEq([...lhs], [...rhs]);
    if (typeof lhs === "object") {
        const keys = Object.keys(lhs);
        if (!isEq(keys, Object.keys(rhs))) return false;
        for (let i = keys.length - 1; i >= 0; i--) {
            if (!isEq(lhs[keys[i]], rhs[keys[i]])) return false;
        }
        return true;
    }
    return lhs == rhs;
}
