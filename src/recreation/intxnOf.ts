import { isEq } from "../comparison/isEq";

/**
 * Gets the intersection of values. (using isEq to judge equality)
 * @param {(T | T[])[]} values Values
 * @returns {T[]} Returns the intersection of values
 * @example
 *
 * intxnOf([1, 2, 3], [2, 3, 4])
 * // => [2, 3]
 *
 * intxnOf([{ name: "Morilence" }, { name: "GarlicGo" }], [{ name: "Morilence" }])
 * // => [{ name: "Morilence" }]
 *
 * intxnOf([1, 2], 2, [2, 3])
 * // => intxnOf([1, 2], [2], [2, 3]) => [2]
 */
export function intxnOf<T>(...values: (T | T[])[]): T[] {
    return values.reduce(
        (intxn: T[], value: T | T[]) =>
            intxn.filter(itemL =>
                (Array.isArray(value) ? (value as T[]) : [value as T]).some(itemR => isEq(itemL, itemR))
            ),
        (values.length === 0 ? [] : Array.isArray(values[0]) ? values[0] : [values[0]]) as T[]
    ) as T[];
}
