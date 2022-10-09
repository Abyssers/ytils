import { isArrLike } from "./isArrLike";
import { isTypedArr } from "../type/isTypedArr";
import { tagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is empty.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is empty or unrecognizable, else false
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty([])
 * // => true
 *
 * isEmpty(new HTMLCollection())
 * // => true
 *
 * isEmpty(new Float32Array())
 * // => true
 *
 * isEmpty(new Set())
 * // => true
 *
 * isEmpty(new Map())
 * // => true
 *
 * isEmpty([6])
 * // => false
 *
 * isEmpty(new Set([6]))
 * // => false
 */
export function isEmpty(value: object): boolean;
export function isEmpty(value: TypedArray): boolean;
export function isEmpty<T>(value: ArrayLike<T>): boolean;
export function isEmpty<T>(value: Set<T>): boolean;
export function isEmpty<T, U>(value: Map<T, U>): boolean;
export function isEmpty<T, U>(value: object | TypedArray | ArrayLike<T> | Set<T> | Map<T, U>): boolean {
    if (value == null) return true;
    if (isArrLike(value)) return (value as ArrayLike<T>).length === 0;
    if (isTypedArr(value)) return (value as TypedArray).byteLength === 0;
    if (tagOf(value) === TypeTag.Map || tagOf(value) === TypeTag.Set) return (value as Set<T> | Map<T, U>).size === 0;
    if (typeof value === "object") return Object.keys(value).length === 0;
    return true;
}
