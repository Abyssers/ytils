import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a Symbol object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a Symbol object, else false
 * @example
 *
 * isSym(Symbol())
 * // => true
 *
 * isSym(Symbol(6))
 * // => true
 *
 * isSym(6)
 * // => false
 *
 * isSym("6")
 * // => false
 *
 * isSym({})
 * // => false
 *
 * isSym([])
 * // => false
 */
export function isSym(value: any): value is symbol {
    return tagOf(value) === Tag.Symbol;
}
