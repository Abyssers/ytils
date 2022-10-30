/**
 * Gets the prototype of value
 * @param value The value to get from
 * @returns {any} The prototype of value
 * @example
 *
 * prototypeOf(6)
 * // => Number.prototype
 *
 * prototypeOf("6")
 * // => String.prototype
 *
 * prototypeOf({})
 * // => Object.prototype
 *
 * prototypeOf([])
 * // => Array.prototype
 *
 * prototypeOf(new (class A { constructor() {} })())
 * // => A.prototype
 */
export function prototypeOf(value: any): any {
    if (value == null) return null;
    return Object.getPrototypeOf(value);
}

export const protoOf = prototypeOf;
