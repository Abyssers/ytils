import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a valid number or a Number object that can be transformed to a valid number.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a valid number or a Number object that can can be transformed to a valid number, else false
 * @example
 *
 * isNumber(6)
 * // => true
 *
 * isNumber(6.66)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber(new Number(1))
 * // => true
 *
 * isNumber("6")
 * // => false
 *
 * isNumber(NaN)
 * // => false
 *
 * isNumber(new Number(NaN))
 * // => false
 */
export function isNumber(value: any): value is number {
    return typeTagOf(value) === TypeTag.Number && !Number.isNaN(+value);
}

export const isNum = isNumber;
