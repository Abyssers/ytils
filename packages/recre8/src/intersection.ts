import { isArr } from "@ytils/typ";
import { isEq } from "@ytils/cmpr";

/**
 * Gets the intersection of values. (using isEq to judge equality)
 * @param {(T | T[])[]} values Values
 * @returns {T[]} Returns the intersection of values
 * @example
 *
 * intersection([1, 2, 3], [2, 3, 4])
 * // => [2, 3]
 *
 * intersection([{ name: "Morilence" }, { name: "GarlicGo" }], [{ name: "Morilence" }])
 * // => [{ name: "Morilence" }]
 *
 * intersection([1, 2], 2, [2, 3])
 * // => intersection([1, 2], [2], [2, 3]) => [2]
 */
export function intersection<T>(...values: (T | T[])[]): T[] {
    return values.reduce(
        (intersection: T[], value: T | T[]) =>
            intersection.filter(itemL =>
                (isArr(value) ? (value as T[]) : [value as T]).some(itemR => isEq(itemL, itemR))
            ),
        (values.length === 0 ? [] : isArr(values[0]) ? values[0] : [values[0]]) as T[]
    ) as T[];
}

export const intxn = intersection;
