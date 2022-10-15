import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a Set object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a Set object, else false
 * @example
 *
 * isSet(new Set())
 * // => true
 *
 * isSet(new Set([0, 1, 2]))
 * // => true
 */
export function isSet<T>(value: any): value is Set<T> {
    return tagOf(value) === Tag.Set;
}
