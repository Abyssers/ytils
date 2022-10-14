import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a RegExp object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a RegExp object, else false
 * @example
 *
 * isRegExp(/abc/)
 * // => true
 *
 * isRegExp(/abc/g)
 * // => true
 *
 * isRegExp(new RegExp("abc"))
 * // => true
 *
 * isRegExp("6")
 * // => false
 *
 * isRegExp({})
 * // => false
 *
 * isRegExp([])
 * // => false
 */
export function isRegExp(value: any): value is RegExp {
    return tagOf(value) === Tag.RegExp;
}
