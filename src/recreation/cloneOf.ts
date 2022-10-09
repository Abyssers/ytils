import { tagOf, TypeTag } from "../.internal/tag";
import { isFunc } from "../type/isFunc";

/**
 * Gets the clone of value
 * @param {any} value The value to be cloned
 * @returns The clone of value
 */
export function cloneOf(value: any): any {
    if (value == null) return value;
    const map = new WeakMap();
    return clone(value);

    function clone(value: any) {
        if (map.has(value)) {
            return map.get(value);
        }
        const tag = tagOf(value);
        if (tag === TypeTag.Number || tag === TypeTag.Boolean || tag === TypeTag.String) {
            if (typeof value !== "object") return value; // literal
            const cloned = new value.constructor(value);
            map.set(value, cloned);
            return cloned;
        }
        if (
            tag === TypeTag.Date ||
            tag === TypeTag.Error ||
            tag === TypeTag.Map ||
            tag === TypeTag.Set ||
            tag === TypeTag.WeakMap ||
            tag === TypeTag.WeakSet
        ) {
            const cloned = new value.constructor(value);
            map.set(value, cloned);
            return cloned;
        }
        if (tag === TypeTag.RegExp) {
            const cloned = new value.constructor(value);
            cloned.lastIndex = value.lastIndex;
            map.set(value, cloned);
            return cloned;
        }
        if (tag === TypeTag.Symbol || isFunc(value)) return value; // preserve uniqueness
        if (tag === TypeTag.Array) {
            const cloned = value.map((item: any) => clone(item));
            map.set(value, cloned);
            return cloned;
        }
        if (typeof tag === "object") {
            const cloned = Object.create(Object.getPrototypeOf(value));
            const keys = Object.keys(value);
            for (let i = keys.length - 1; i >= 0; i--) {
                cloned[keys[i]] = clone(value[keys[i]]);
            }
            map.set(value, cloned);
            return cloned;
        }
        return null;
    }
}
