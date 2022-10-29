import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is an integer or an integral Number object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an integer or an integral Number object, else false
 * @example
 *
 * isInteger(6)
 * // => true
 *
 * isInteger(Number.MAX_SAFE_INTEGER)
 * // => true
 *
 * isInteger(new Number(1))
 * // => true
 *
 * isInteger(6.66)
 * // => false
 *
 * isInteger("6")
 * // => false
 *
 * isInteger(NaN)
 * // => false
 *
 * isInteger(new Number(NaN))
 * // => false
 */
export function isInteger(value: any): value is number {
    return typeTagOf(value) === TypeTag.Number && Number.isInteger(+value);
}

export const isInt = isInteger;
