import { typeTagOf, TypeTag } from "../.internal/tag";

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
export function isMap<K, V>(value: Map<K, V>): value is Map<K, V>;
export function isMap(value: any): boolean;
export function isMap(value: any): boolean {
    return typeTagOf(value) === TypeTag.Map;
}
