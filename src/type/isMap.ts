import { tagOf, TypeTag } from "../core/tag";

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
export function isMap(value: any): boolean {
    return tagOf(value) === TypeTag.Map;
}
