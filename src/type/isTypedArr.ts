import { tagOf, TypeTag } from "../.internal/tag";

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
export function isTypedArr(value: any): boolean {
    const tag = tagOf(value);
    return (
        tag === TypeTag.BigInt64Array ||
        tag === TypeTag.BigUint64Array ||
        tag === TypeTag.Float32Array ||
        tag === TypeTag.Float64Array ||
        tag === TypeTag.Int16Array ||
        tag === TypeTag.Int32Array ||
        tag === TypeTag.Int8Array ||
        tag === TypeTag.Uint16Array ||
        tag === TypeTag.Uint32Array ||
        tag === TypeTag.Uint8Array ||
        tag === TypeTag.Uint8ClampedArray
    );
}
