import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a WeakMap object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a WeakMap object, else false
 * @example
 *
 * isWeakMap(new WeakMap())
 * // => true
 *
 * isWeakMap(new WeakMap([[{ n: "a" }, 1], [{ n: "b" }, 2]]))
 * // => true
 */
export function isWeakMap<K extends object, V>(value: any): value is WeakMap<K, V> {
    return tagOf(value) === Tag.WeakMap;
}
