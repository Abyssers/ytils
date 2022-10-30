import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a string in numeric form or a String object which can be transformed to a valid number.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a string in numeric form or a String object which can be transformed to a valid number, else false
 * @example
 *
 * isNumericString("6")
 * // => true
 *
 * isNumericString(new String("6"))
 * // => true
 *
 * isNumericString(6)
 * // => false
 *
 * isNumericString("abc")
 * // => false
 *
 * isNumericString("six")
 * // => false
 */
export function isNumericString(value: any): value is string {
    return typeTagOf(value) === TypeTag.String && !Number.isNaN(+value);
}

export const isNumericStr = isNumericString;
