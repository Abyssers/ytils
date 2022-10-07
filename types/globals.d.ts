/**
 * Built-in types of an array-like view that describes the underlying binary data buffer.
 * [MDN TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
 */
type TypedArray =
    | BigInt64Array
    | BigUint64Array
    | Float32Array
    | Float64Array
    | Int16Array
    | Int32Array
    | Int8Array
    | Uint16Array
    | Uint32Array
    | Uint8Array
    | ArrayBuffer
    | Uint8ClampedArray;
