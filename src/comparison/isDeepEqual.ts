import { isArr } from "../type/isArr";
import { isMap } from "../type/isMap";
import { isObj } from "../type/isObj";
import { isSet } from "../type/isSet";
import { isWeakMap } from "../type/isWeakMap";
import { isWeakSet } from "../type/isWeakSet";
import { isEqual } from "./isEqual";

/**
 * Checks whether lhs and rhs are equal deeply.
 * @param {any} lhs The left-hand side
 * @param {any} rhs The right-hand side
 * @returns {boolean} Returns true if lhs and rhs are equal deeply, else false
 * @example
 *
 * isDeepEqual(6, 6)
 * // true
 *
 * isDeepEqual("6", "6")
 * // true
 *
 * isDeepEqual({ n: 6 }, { n: 6 })
 * // => true
 *
 * isDeepEqual([6], [6])
 * // => true
 *
 * isDeepEqual(new Set([6]), new Set([6]))
 * // => true
 *
 * isDeepEqual(6, "6")
 * // => false
 */
export function isDeepEqual(lhs: any, rhs: any): boolean {
    if (isEqual(lhs, rhs)) return true;
    if (isArr(lhs)) {
        if (lhs.length !== rhs.length) return false;
        for (let i = lhs.length - 1; i >= 0; i--) {
            if (!isDeepEqual(lhs[i], rhs[i])) return false;
        }
        return true;
    }
    if (isSet(lhs) || isWeakSet(lhs) || isMap(lhs) || isWeakMap(lhs)) return isDeepEqual([...lhs], [...rhs]);
    if (isObj(lhs)) {
        const keys = Object.keys(lhs);
        if (!isDeepEqual(keys, Object.keys(rhs))) return false;
        for (let i = keys.length - 1; i >= 0; i--) {
            if (!isDeepEqual(lhs[keys[i]], rhs[keys[i]])) return false;
        }
        return true;
    }
    return lhs === rhs;
}
