import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a Map object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a Map object, else false
 * @example
 *
 * isMap(new Map())
 * // => true
 *
 * isMap(new Map([[0, 1], [1, 2]]))
 * // => true
 */
export function isMap<K, V>(value: any): value is Map<K, V> {
    return tagOf(value) === Tag.Map;
}
