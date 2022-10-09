import { tagOf, TypeTag } from "../.internal/tag";
import { isFunc } from "../type/isFunc";

/**
 * Gets the clone of value
 * @param {any} value The value to be cloned
 * @returns The clone of value
 */
export function cloneOf(value: any): any {
    if (value == null) return value;
    const set = new WeakSet();
    return clone(value);

    function clone(value: any) {
        if (set.has(value)) {
            return value;
        }
        const tag = tagOf(value);
        if (tag === TypeTag.Number || tag === TypeTag.Boolean || tag === TypeTag.String)
            return typeof value !== "object" ? value : new value.constructor(value);
        if (
            tag === TypeTag.Date ||
            tag === TypeTag.Error ||
            tag === TypeTag.Map ||
            tag === TypeTag.Set ||
            tag === TypeTag.WeakMap ||
            tag === TypeTag.WeakSet
        )
            return new value.constructor(value);
        if (tag === TypeTag.RegExp) {
            const cloned = new RegExp(value);
            cloned.lastIndex = (value as RegExp).lastIndex;
            return cloned;
        }
        if (tag === TypeTag.Symbol || isFunc(value)) return value;
        if (tag === TypeTag.Array) return value.map((item: any) => clone(item));
        if (typeof tag === "object") {
            const cloned = Object.create(Object.getPrototypeOf(value));
            const keys = Object.keys(value);
            for (let i = keys.length - 1; i >= 0; i--) {
                cloned[keys[i]] = clone(value[keys[i]]);
            }
            return cloned;
        }
        return null;
    }
}
