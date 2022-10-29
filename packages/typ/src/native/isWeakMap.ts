import { typeTagOf, TypeTag } from "../.internal/tag";

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
export function isWeakMap<K extends object, V>(value: WeakMap<K, V>): value is WeakMap<K, V>;
export function isWeakMap(value: any): value is WeakMap<any, any>;
export function isWeakMap(value: any): boolean {
    return typeTagOf(value) === TypeTag.WeakMap;
}

const a: any = "1";
if (isWeakMap(a)) {
    console.log(a);
}
