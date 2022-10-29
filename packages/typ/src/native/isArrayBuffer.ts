import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is an ArrayBuffer object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an ArrayBuffer object, else false
 * @example
 *
 * isArrayBuffer(new ArrayBuffer())
 * // => true
 *
 * isArrayBuffer(new ArrayBuffer(6))
 * // => true
 *
 * isArrayBuffer([])
 * // => false
 *
 * isArrayBuffer(6)
 * // => false
 *
 * isArrayBuffer("6")
 * // => false
 */
export function isArrayBuffer(value: any): value is ArrayBuffer {
    return typeTagOf(value) === TypeTag.ArrayBuffer;
}
