import { tagOf, TypeTag } from "../.internal/tag";

/**
 * Transforms value to k-v pairs.
 * @param {Array<T> | Set<T> | Map<T, U> | T} value The value to transform
 * @returns {[T, T][] | [T, U][] | [T, T[]] | [string, T[keyof T]][]} Returns pairs transformed from value
 * @example
 *
 * pairsFrom([1, 2, 3])
 * // => [1, [2, 3]]
 *
 * pairsFrom(new Set([1, 2, 3]))
 * // => [[1, 1], [2, 2], [3, 3]]
 *
 * pairsFrom(new Map([["a", 1], ["b", 2], ["c", 3]]))
 * // => [["a", 1], ["b", 2], ["c", 3]]
 *
 * pairsFrom({ a: 1, b: 2, c: 3 })
 * // => [["a", 1], ["b", 2], ["c", 3]]
 */
export function pairsFrom<T>(value: Array<T>): [T, T[]];
export function pairsFrom<T>(value: Set<T>): [T, T][];
export function pairsFrom<T, U>(value: Map<T, U>): [T, U][];
export function pairsFrom<T extends object>(value: T): [string, T[keyof T]][];
export function pairsFrom<T, U>(
    value: Array<T> | Set<T> | Map<T, U> | T
): [T, T][] | [T, U][] | [T, T[]] | [string, T[keyof T]][] {
    if (value == null || typeof value !== "object") return [];
    if (Array.isArray(value) && value.length > 0) {
        return [value[0], value.slice(1)];
    }
    let idx = -1;
    const tag = tagOf(value);
    if (tag === TypeTag.Set) {
        const pairs = new Array<[T, T]>((value as Set<T>).size);
        (value as Set<T>).forEach(item => {
            pairs[++idx] = [item, item];
        });
        return pairs;
    }
    if (tag === TypeTag.Map) {
        const pairs = new Array<[T, U]>((value as Map<T, U>).size);
        (value as Map<T, U>).forEach((item, key) => {
            pairs[++idx] = [key, item];
        });
        return pairs;
    }
    const keys = Object.keys(value);
    const pairs = new Array<[string, T[keyof T]]>(keys.length);
    for (idx = keys.length - 1; idx >= 0; idx--) {
        pairs[idx] = [keys[idx], (value as { [key: string]: any })[keys[idx]]];
    }
    return pairs as any;
}
