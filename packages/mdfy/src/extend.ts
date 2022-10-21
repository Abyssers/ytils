/**
 * Extends the target with properties of the extra object that do not exist in the target.
 * The same properties on the target will not be overridden.
 * @param target The target to be extended
 * @param extra The extra object applied to extend
 * @returns Returns the result of the extension
 * @example
 *
 * const p = { name: "GarlicGo" };
 * extend(p, { name: "Morilence", age: 21 })
 * // => p: { name: "GarlicGo", age: 21 }
 *
 * const p = { name: "GarlicGo" };
 * extend(p, undefined)
 * // => p
 */
export function extend<T extends { [key: string]: any }, U extends { [key: string]: any }>(
    target: T,
    extra: U = {} as U
): T | (T & U) | null {
    if (target == null || typeof target !== "object") return null;
    if (extra == null || typeof extra !== "object") return target;
    const extraKeys = Object.keys(extra);
    for (let i = extraKeys.length - 1; i >= 0; i--) {
        if (!Object.prototype.hasOwnProperty.call(target, extraKeys[i])) {
            (target as { [key: string]: any })[extraKeys[i]] = extra[extraKeys[i]];
        }
    }
    return target as T & U;
}
