import { isEq } from "../comparison/isEq";

/**
 * Gets the union of values. (using isEq to judge equality)
 * @param {(T | T[])[]} values Values
 * @returns {T[]} Returns the union of values
 * @example
 *
 * unionOf([1, 2, 3], [2, 3, 4])
 * // => [1, 2, 3, 4]
 *
 * unionOf([{ name: "Morilence" }, { name: "GarlicGo" }], [{ name: "Morilence" }])
 * // => [{ name: "Morilence" }, { name: "GarlicGo" }]
 *
 * unionOf([1, 2], 2, [2, 3])
 * // => unionOf([1, 2], [2], [2, 3]) => [1, 2, 3]
 */
export function unionOf<T>(...values: (T | T[])[]): T[] {
    const sylloge: T[] = [];
    for (let i = values.length - 1; i >= 0; i--) {
        sylloge.push(...(Array.isArray(values[i]) ? (values[i] as T[]) : [values[i] as T]));
    }
    return sylloge.filter((itemL, idx) => sylloge.findIndex(itemR => isEq(itemL, itemR)) === idx);
}
