import { tagOf, TypeTag } from "../.core/tag";

/**
 * Checks whether value is NaN or a Number object whose primitive value is NaN.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is NaN or a Number object whose primitive value is NaN, else false
 * @example
 *
 * isStrictNaN(NaN)
 * // => true
 *
 * isStrictNaN(new Number(NaN))
 * // => true
 *
 * isStrictNaN(6.66)
 * // => false
 *
 * isStrictNaN(Number.MAX_SAFE_INTEGER)
 * // => false
 *
 * isStrictNaN(new Number(4))
 * // => false
 */
export function isStrictNaN(value: any): boolean {
    return tagOf(value) === TypeTag.Number && Number.isNaN(+value);
}
