import { tagOf, TypeTag } from "../.core/tag";

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
 * isPlainObj([])
 * // => false
 *
 * isPlainObj(new Number(6))
 * // => false
 *
 * isPlainObj(new String("6"))
 * // => false
 */
export function isPlainObj(value: any): boolean {
    return tagOf(value) === TypeTag.Object;
}
