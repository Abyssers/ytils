import { typeTagOf, TypeTag } from "../.internal/tag";

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
export function isWeakSet<T extends object>(value: WeakSet<T>): value is WeakSet<T>;
export function isWeakSet(value: any): value is WeakSet<any>;
export function isWeakSet(value: any): boolean {
    return typeTagOf(value) === TypeTag.WeakSet;
}
