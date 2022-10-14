import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a WeakRef object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a WeakRef object, else false
 * @example
 *
 * isWeakRef(new WeakRef({}))
 * // => true
 *
 * isWeakRef(new WeakRef([]))
 * // => true
 *
 * isWeakRef(new WeakRef(Math))
 * // => true
 *
 * isWeakRef("6")
 * // => false
 *
 * isWeakRef({})
 * // => false
 *
 * isWeakRef([])
 * // => false
 */
export function isWeakRef<T extends object>(value: any): value is WeakRef<T> {
    return tagOf(value) === Tag.WeakRef;
}
