import { tagOf, TypeTag } from "../.core/tag";

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
export function isSet(value: any): boolean {
    return tagOf(value) === TypeTag.Set;
}
