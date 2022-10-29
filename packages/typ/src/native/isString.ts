import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a string or a String object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a string or a String object, else false
 * @example
 *
 * isString("6")
 * // => true
 *
 * isString(new String("6"))
 * // => true
 *
 * isString(6)
 * // => false
 *
 * isString(["6"])
 * // => false
 *
 * isString({})
 * // => false
 */
export function isString(value: any): value is string {
    return typeTagOf(value) === TypeTag.String;
}

export const isStr = isString;
