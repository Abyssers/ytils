/**
 * Built-in types
 */
export enum TypeTag {
    Arguments = "[object Arguments]",
    Array = "[object Array]",
    ArrayBuffer = "[object ArrayBuffer]",
    AsyncFunction = "[object AsyncFunction]",
    AsyncGenerator = "[object AsyncGenerator]",
    AsyncGeneratorFunction = "[object AsyncGeneratorFunction]",
    Atomics = "[object Atomics]",
    BigInt = "[object BigInt]",
    BigInt64Array = "[object BigInt64Array]",
    BigUint64Array = "[object BigUint64Array]",
    Boolean = "[object Boolean]",
    DataView = "[object DataView]",
    Date = "[object Date]",
    Error = "[object Error]",
    FinalizationRegistry = "[object FinalizationRegistry]",
    Float32Array = "[object Float32Array]",
    Float64Array = "[object Float64Array]",
    Function = "[object Function]",
    Generator = "[object Generator]",
    GeneratorFunction = "[object GeneratorFunction]",
    Global = "[object global]",
    Int16Array = "[object Int16Array]",
    Int32Array = "[object Int32Array]",
    Int8Array = "[object Int8Array]",
    Intl = "[object Intl]",
    JSON = "[object JSON]",
    Map = "[object Map]",
    Math = "[object Math]",
    Null = "[object Null]",
    Number = "[object Number]",
    Object = "[object Object]",
    Promise = "[object Promise]",
    Reflect = "[object Reflect]",
    RegExp = "[object RegExp]",
    Set = "[object Set]",
    SharedArrayBuffer = "[object SharedArrayBuffer]",
    String = "[object String]",
    Symbol = "[object Symbol]",
    Uint16Array = "[object Uint16Array]",
    Uint32Array = "[object Uint32Array]",
    Uint8Array = "[object Uint8Array]",
    Uint8ClampedArray = "[object Uint8ClampedArray]",
    Undefined = "[object Undefined]",
    WeakMap = "[object WeakMap]",
    WeakRef = "[object WeakRef]",
    WeakSet = "[object WeakSet]",
    Window = "[object Window]",
}

/**
 * Gets the type-tag of value using Object.prototype.toString
 * @param value The value to get from
 * @returns {TypeTag} The type-tag of value
 * @example
 *
 * typeTagOf(6)
 * // => "[object Number]"
 *
 * typeTagOf(new Number(6))
 * // => "[object Number]"
 *
 * typeTagOf("6")
 * // => "[object String]"
 *
 * typeTagOf(new String(6))
 * // => "[object String]"
 */
export function typeTagOf(value: any): TypeTag {
    return Object.prototype.toString.call(value);
}
