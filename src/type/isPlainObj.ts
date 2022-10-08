import { tagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a plain object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a plain object, else false
 * @example
 *
 * isPlainObj({})
 * // => true
 *
 * isPlainObj(Object.create({}))
 * // => true
 *
 * isPlainObj(Object.create(null))
 * // => true
 *
 * isPlainObj([])
 * // => false
 *
 * isPlainObj(new Number(6))
 * // => false
 *
 * isPlainObj(new String("6"))
 * // => false
 *
 * isPlainObj(new (class A { constructor() {} })())
 * // => false
 */
export function isPlainObj(value: any): boolean {
    return tagOf(value) === TypeTag.Object && (value.constructor === Object || Object.getPrototypeOf(value) === null);
}
