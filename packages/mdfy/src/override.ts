/**
 * Overrides properties of the target using the extra object.
 * Properties of the target will not be extended by the extra object.
 * @param target The target to be overrided
 * @param extra The extra object applied to override
 * @returns Returns the result of the override
 * @example
 *
 * const p = { name: "GarlicGo" };
 * override(p, { name: "Morilence", age: 21 })
 * // => p: { name: "Morilence" }
 *
 * const p = { name: "GarlicGo" };
 * override(p, undefined)
 * // => p
 */
export function override<T extends { [key: string]: any }, U extends { [key: string]: any }>(
    target: T,
    extra: U = {} as U
): T | null {
    if (target == null || typeof target !== "object") return null;
    if (extra == null || typeof extra !== "object") return target;
    const extraKeys = Object.keys(extra);
    for (let i = extraKeys.length - 1; i >= 0; i--) {
        if (Object.prototype.hasOwnProperty.call(target, extraKeys[i])) {
            (target as { [key: string]: any })[extraKeys[i]] = extra[extraKeys[i]];
        }
    }
    return target;
}
