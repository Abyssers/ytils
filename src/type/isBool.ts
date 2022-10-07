import { tagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a boolean or a Boolean object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a boolean or a Boolean object, else false
 * @example
 *
 * isBool(true)
 * // => true
 *
 * isBool(false)
 * // => true
 *
 * isBool(new Boolean(true))
 * // => true
 *
 * isBool("6")
 * // => false
 *
 * isBool(NaN)
 * // => false
 */
export function isBool(value: any): boolean {
    return tagOf(value) === TypeTag.Boolean;
}
