import { tagOf, TypeTag } from "../.internal/tag";
import { isNum } from "./isNum";

/**
 * Checks whether value is a valid date-string or a String object that can be transformed to a valid date.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a valid date-string or a String object that can be transformed to a valid date, else false
 * @example
 *
 * isDateStr("Thu Nov 10 2022 00:00:00 GMT+0800")
 * // => true
 *
 * isDateStr("2022 11 10")
 * // => true
 *
 * isDateStr("2022/11/10")
 * // => true
 *
 * isDateStr("20221110")
 * // => false
 *
 * isDateStr("1234567")
 * // => false
 */
export function isDateStr(value: any): boolean {
    return tagOf(value) === TypeTag.String && isNum(new Date(value).getTime());
}
