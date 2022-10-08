/**
 * Gets the end prototype of value's prototype chain
 * @param value The value to get from
 * @returns {any} The end prototype of value's prototype chain
 * @example
 *
 * endProtoOf(6)
 * // => Object.prototype
 *
 * endProtoOf("6")
 * // => Object.prototype
 *
 * endProtoOf({})
 * // => Object.prototype
 *
 * endProtoOf([])
 * // => Object.prototype
 *
 * endProtoOf(new (class A { constructor() {} })())
 * // => Object.prototype
 */
export function endProtoOf(value: any): any {
    if (value == null) return null;
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return proto;
}
