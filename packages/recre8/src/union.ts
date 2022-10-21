import { isArr } from "@ytils/typ";
import { isEq } from "@ytils/cmpr";

/**
 * Gets the union of values. (using isEq to judge equality)
 * @param {(T | T[])[]} values Values
 * @returns {T[]} Returns the union of values
 * @example
 *
 * union([1, 2, 3], [2, 3, 4])
 * // => [1, 2, 3, 4]
 *
 * union([{ name: "Morilence" }, { name: "GarlicGo" }], [{ name: "Morilence" }])
 * // => [{ name: "Morilence" }, { name: "GarlicGo" }]
 *
 * union([1, 2], 2, [2, 3])
 * // => union([1, 2], [2], [2, 3]) => [1, 2, 3]
 */
export function union<T>(...values: (T | T[])[]): T[] {
    const sylloge: T[] = [];
    for (let i = values.length - 1; i >= 0; i--) {
        sylloge.push(...(isArr(values[i]) ? (values[i] as T[]) : [values[i] as T]));
    }
    return sylloge.filter((itemL, idx) => sylloge.findIndex(itemR => isEq(itemL, itemR)) === idx);
}
