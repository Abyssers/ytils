import { tagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a string in numeric form or a String object which can be transformed to a valid number.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a string in numeric form or a String object which can be transformed to a valid number, else false
 * @example
 *
 * isNumericStr("6")
 * // => true
 *
 * isNumericStr(new String("6"))
 * // => true
 *
 * isNumericStr(6)
 * // => false
 *
 * isNumericStr("abc")
 * // => false
 *
 * isNumericStr("six")
 * // => false
 */
export function isNumericStr(value: any): boolean {
    return tagOf(value) === TypeTag.String && !Number.isNaN(+value);
}
