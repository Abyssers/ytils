/**
 * Merges the target with the extra object.
 * Will use the extra object to override the same properties in the target.
 * @param target The target to be merged
 * @param extra The extra object applied to merge
 * @returns Returns the result of the mergence
 * @example
 *
 * const p = { name: "GarlicGo" };
 * merge(p, { name: "Morilence", age: 21 })
 * // => p: { name: "Morilence", age: 21 }
 *
 * const p = { name: "GarlicGo" };
 * merge(p, undefined)
 * // => p
 */
export function merge<T extends { [key: string]: any }, U extends { [key: string]: any }>(
    target: T,
    extra: U = {} as U
): (T & U) | null {
    if (target == null || typeof target !== "object")
        return extra == null || typeof extra !== "object" ? null : (extra as T & U);
    if (extra == null || typeof extra !== "object") return target as T & U;
    const extraKeys = Object.keys(extra);
    for (let i = extraKeys.length - 1; i >= 0; i--) {
        (target as { [key: string]: any })[extraKeys[i]] = extra[extraKeys[i]];
    }
    return target as T & U;
}
