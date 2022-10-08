/**
 * Gets the prototype of value
 * @param value The value to get from
 * @returns {any} The prototype of value
 * @example
 *
 * protoOf(6)
 * // => Number.prototype
 *
 * protoOf("6")
 * // => String.prototype
 *
 * protoOf({})
 * // => Object.prototype
 *
 * protoOf([])
 * // => Array.prototype
 *
 * protoOf(new (class A { constructor() {} })())
 * // => A.prototype
 */
export function protoOf(value: any): any {
    if (value == null) return null;
    return Object.getPrototypeOf(value);
}
