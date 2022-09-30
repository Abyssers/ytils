import { tagOf, TypeTag } from "../.core/tag";

/**
 * Checks whether value is an ArrayBuffer object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an ArrayBuffer object, else false
 * @example
 *
 * isArrBuffer(new ArrayBuffer())
 * // => true
 *
 * isArrBuffer(new ArrayBuffer(6))
 * // => true
 *
 * isArrBuffer([])
 * // => false
 *
 * isArrBuffer(6)
 * // => false
 *
 * isArrBuffer("6")
 * // => false
 */
export function isArrBuffer(value: any): boolean {
    return tagOf(value) === TypeTag.ArrayBuffer;
}