import { tagOf, TypeTag } from "../.core/tag";

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
export function isWeakMap(value: any): boolean {
    return tagOf(value) === TypeTag.WeakMap;
}
