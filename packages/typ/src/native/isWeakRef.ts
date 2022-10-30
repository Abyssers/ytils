import { typeTagOf, TypeTag } from "../.internal/tag";

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
export function isWeakRef<T extends object>(value: WeakRef<T>): value is WeakRef<T>;
export function isWeakRef(value: any): value is WeakRef<any>;
export function isWeakRef(value: any): boolean {
    return typeTagOf(value) === TypeTag.WeakRef;
}
