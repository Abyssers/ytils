import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a plain object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a plain object, else false
 * @example
 *
 * isPlainObject({})
 * // => true
 *
 * isPlainObject(Object.create({}))
 * // => true
 *
 * isPlainObject(Object.create(null))
 * // => true
 *
 * isPlainObject([])
 * // => false
 *
 * isPlainObject(new Number(6))
 * // => false
 *
 * isPlainObject(new String("6"))
 * // => false
 *
 * isPlainObject(new (class A { constructor() {} })())
 * // => false
 */
export function isPlainObject<T extends object>(value: T): T;
export function isPlainObject(value: any): value is object;
export function isPlainObject(value: any): boolean {
    return (
        typeTagOf(value) === TypeTag.Object && (value.constructor === Object || Object.getPrototypeOf(value) === null)
    );
}

export const isPlainObj = isPlainObject;
