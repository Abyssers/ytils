import { isNum, isBool, isStr, isDate, isRegExp, isSym, isFunc, isArr, isSet, isMap } from "@ytils/typ";
import { isStrictEq } from "./isStrictEq";
import { isTypeEq } from "./isTypeEq";

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
    if (!isTypeEq(lhs, rhs)) return false;
    if (isStrictEq(lhs, rhs)) return true;
    if (isNum(lhs) || isBool(lhs) || isStr(lhs)) return lhs.valueOf() === rhs.valueOf();
    if (isDate(lhs)) return isStrictEq(lhs.getTime(), rhs.getTime());
    if (isRegExp(lhs)) return lhs.source === rhs.source && lhs.flags === rhs.flags && lhs.lastIndex === rhs.lastIndex;
    if (isSym(lhs) || isFunc(lhs)) return false;
    if (isArr(lhs)) {
        if (lhs.length !== rhs.length) return false;
        for (let i = lhs.length - 1; i >= 0; i--) {
            if (!isEq(lhs[i], rhs[i])) return false;
        }
        return true;
    }
    if (isSet(lhs) || isMap(lhs)) return isEq([...lhs], [...rhs]);
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
