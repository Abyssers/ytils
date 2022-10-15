import { isNum, isBool, isStr, isDate, isRegExp, isArr, isSet, isMap, isWeakSet, isWeakMap, isErr } from "@ytils/typ";

/**
 * Gets the clone of value
 * @param value The value to be cloned
 * @returns The clone of value
 * @example
 *
 * cloneOf(1)
 * // => 1
 *
 * cloneOf(new String("1"))
 * // => new String("1")
 *
 * cloneOf([6])
 * // => [6]
 *
 * cloneOf({ age: 6 })
 * // => { age: 6 }
 */
export function cloneOf<T>(value: T): T {
    const map = new WeakMap<object, T>();
    return cloneWithMap(value, map);
}

function cloneWithMap<T>(value: T, map: WeakMap<object, T>): T {
    /**
     * value === null || typeof value !== "object":
     * null (literal)
     * undefined (literal)
     * number (literal)
     * boolean (literal)
     * string (literal)
     * bigint (literal)
     * symbol (maintain uniqueness)
     * function (maintain uniqueness)
     */
    if (value === null || typeof value !== "object") return value;
    if (map.has(value)) {
        return map.get(value);
    }
    let cloned: any;
    if (
        isNum(value) ||
        isBool(value) ||
        isStr(value) ||
        isDate(value) ||
        isErr(value) ||
        isSet(value) ||
        isMap(value) ||
        isWeakSet(value) ||
        isWeakMap(value)
    ) {
        cloned = new (value.constructor as ObjectConstructor)(value);
    } else if (isRegExp(value)) {
        cloned = new RegExp(value);
        cloned.lastIndex = value.lastIndex;
    } else if (isArr(value)) {
        cloned = new Array(value.length);
        for (let i = value.length - 1; i >= 0; i--) {
            cloned[i] = cloneWithMap(value[i], map);
        }
    } else {
        cloned = Object.create(Object.getPrototypeOf(value));
        const keys = Object.keys(value);
        for (let i = keys.length - 1; i >= 0; i--) {
            cloned[keys[i]] = cloneWithMap((value as { [key: string]: any })[keys[i]], map);
        }
    }
    map.set(value, cloned as T);
    return cloned as T;
}
