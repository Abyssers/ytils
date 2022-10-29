import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a kind of TypedArray object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a kind of TypedArray object, else false
 * @example
 *
 * isTypedArray(new BigInt64Array())
 * // => true
 *
 * isTypedArray(new BigUint64Array())
 * // => true
 *
 * isTypedArray(new Float32Array())
 * // => true
 *
 * isTypedArray(new Float64Array())
 * // => true
 *
 * isTypedArray(new Int16Array())
 * // => true
 *
 * isTypedArray(new Int32Array())
 * // => true
 *
 * isTypedArray(new Int8Array())
 * // => true
 *
 * isTypedArray(new Uint16Array())
 * // => true
 *
 * isTypedArray(new Uint32Array())
 * // => true
 *
 * isTypedArray(new Uint8Array())
 * // => true
 *
 * isTypedArray(new Uint8ClampedArray())
 * // => true
 *
 * isTypedArray(new ArrayBuffer())
 * // => false
 *
 * isTypedArray(new Array())
 * // => false
 */
export function isTypedArray(value: any): value is TypedArray {
    const typeTag = typeTagOf(value);
    return (
        typeTag === TypeTag.BigInt64Array ||
        typeTag === TypeTag.BigUint64Array ||
        typeTag === TypeTag.Float32Array ||
        typeTag === TypeTag.Float64Array ||
        typeTag === TypeTag.Int16Array ||
        typeTag === TypeTag.Int32Array ||
        typeTag === TypeTag.Int8Array ||
        typeTag === TypeTag.Uint16Array ||
        typeTag === TypeTag.Uint32Array ||
        typeTag === TypeTag.Uint8Array ||
        typeTag === TypeTag.Uint8ClampedArray
    );
}
