import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a kind of TypedArray object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a kind of TypedArray object, else false
 * @example
 *
 * isTypedArr(new BigInt64Array())
 * // => true
 *
 * isTypedArr(new BigUint64Array())
 * // => true
 *
 * isTypedArr(new Float32Array())
 * // => true
 *
 * isTypedArr(new Float64Array())
 * // => true
 *
 * isTypedArr(new Int16Array())
 * // => true
 *
 * isTypedArr(new Int32Array())
 * // => true
 *
 * isTypedArr(new Int8Array())
 * // => true
 *
 * isTypedArr(new Uint16Array())
 * // => true
 *
 * isTypedArr(new Uint32Array())
 * // => true
 *
 * isTypedArr(new Uint8Array())
 * // => true
 *
 * isTypedArr(new Uint8ClampedArray())
 * // => true
 *
 * isTypedArr(new ArrayBuffer())
 * // => false
 *
 * isTypedArr(new Array())
 * // => false
 */
export function isTypedArr(value: any): value is TypedArray {
    const tag = tagOf(value);
    return (
        tag === Tag.BigInt64Array ||
        tag === Tag.BigUint64Array ||
        tag === Tag.Float32Array ||
        tag === Tag.Float64Array ||
        tag === Tag.Int16Array ||
        tag === Tag.Int32Array ||
        tag === Tag.Int8Array ||
        tag === Tag.Uint16Array ||
        tag === Tag.Uint32Array ||
        tag === Tag.Uint8Array ||
        tag === Tag.Uint8ClampedArray
    );
}
