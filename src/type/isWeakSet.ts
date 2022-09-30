import { tagOf, TypeTag } from "../.core/tag";

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
export function isWeakSet(value: any): boolean {
    return tagOf(value) === TypeTag.WeakSet;
}
