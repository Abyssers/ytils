import { typeTagOf, TypeTag } from "../.internal/tag";
import { isNumber } from "../native/isNumber";

/**
 * Checks whether value is a valid date-string or a String object that can be transformed to a valid date.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a valid date-string or a String object that can be transformed to a valid date, else false
 * @example
 *
 * isDateString("Thu Nov 10 2022 00:00:00 GMT+0800")
 * // => true
 *
 * isDateString("2022 11 10")
 * // => true
 *
 * isDateString("2022/11/10")
 * // => true
 *
 * isDateString("20221110")
 * // => false
 *
 * isDateString("1234567")
 * // => false
 */
export function isDateString(value: any): value is string {
    return typeTagOf(value) === TypeTag.String && isNumber(new Date(value).getTime());
}

export const isDateStr = isDateString;
