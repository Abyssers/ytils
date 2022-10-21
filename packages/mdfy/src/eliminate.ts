/**
 * Eliminates properties of the target that the extra object also has.
 * @param target The target to be eliminated
 * @param extra The extra object applied to eliminate
 * @returns Returns the result of the elimination
 * @example
 *
 * const p = { name: "GarlicGo" };
 * eliminate(p, { name: "Morilence", age: 21 })
 * // => p: {}
 *
 * const p = { name: "GarlicGo" };
 * eliminate(p, undefined)
 * // => p
 */
export function eliminate<T extends { [key: string]: any }, U extends { [key: string]: any }>(
    target: T,
    extra: U = {} as U
): Omit<T, keyof U> | null {
    if (target == null || typeof target !== "object") return null;
    if (extra == null || typeof extra !== "object") return target;
    const tgtKeys = Object.keys(target);
    for (let i = tgtKeys.length - 1; i >= 0; i--) {
        if (Object.prototype.hasOwnProperty.call(extra, tgtKeys[i])) {
            delete target[tgtKeys[i]];
        }
    }
    return target as Omit<T, keyof U>;
}
