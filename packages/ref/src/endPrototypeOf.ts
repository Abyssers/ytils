/**
 * Gets the end prototype of value's prototype chain
 * @param value The value to get from
 * @returns {any} The end prototype of value's prototype chain
 * @example
 *
 * endPrototypeOf(6)
 * // => Object.prototype
 *
 * endPrototypeOf("6")
 * // => Object.prototype
 *
 * endPrototypeOf({})
 * // => Object.prototype
 *
 * endPrototypeOf([])
 * // => Object.prototype
 *
 * endPrototypeOf(new (class A { constructor() {} })())
 * // => Object.prototype
 */
export function endPrototypeOf(value: any): any {
    if (value == null) return null;
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return proto;
}

export const endProtoOf = endPrototypeOf;
