import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a DataView object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a DataView object, else false
 * @example
 *
 * isDV(new DataView(new ArrayBuffer()))
 * // => true
 *
 * isDV(new ArrayBuffer())
 * // => false
 *
 * isDV([])
 * // => false
 *
 * isDV(6)
 * // => false
 *
 * isDV("6")
 * // => false
 */
export function isDV(value: any): value is DataView {
    return tagOf(value) === Tag.DataView;
}
