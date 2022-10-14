import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a WeakSet object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a WeakSet object, else false
 * @example
 *
 * isWeakSet(new WeakSet())
 * // => true
 *
 * isWeakSet(new WeakSet([{ a: 1 }, { b: 2 }]))
 * // => true
 */
export function isWeakSet<T extends object>(value: any): value is WeakSet<T> {
    return tagOf(value) === Tag.WeakSet;
}
