import { isArrLike } from "@ytils/typ";

/**
 * Gets one of the elements in the value/values at random.
 * @param {ArrayLike<T>[] | T[]} values The value/values to get from
 * @returns {T | undefined} Returns one of the elements in the value at random if only one argument is passed in, else one of the elements in the arguments at random if more than one argument is passed, else undefined
 * @example
 *
 * randomOf("abcdefg")
 * // => "a" or "b" or "c" or "d" or "e" or "f" or "g"
 *
 * randomOf([1, 2, 3, 4, 5, 6])
 * // => 1 or 2 or 3 or 4 or 5 or 6
 *
 * randomOf("abcdefg", "hijklmn")
 * // => "abcdefg" or "hijklmn"
 *
 * randomOf([1, 2, 3], [4, 5, 6], [7, 8, 9])
 * // => [1, 2, 3] or [4, 5, 6] or [7, 8, 9]
 */
export function randomOf<T>(value: ArrayLike<T>): T | undefined;
export function randomOf<T>(...values: T[]): T | undefined;
export function randomOf<T>(...values: ArrayLike<T>[] | T[]): T | undefined {
    if (values.length === 1 && isArrLike(values[0])) {
        return (values[0] as ArrayLike<T>)[Math.floor(Math.random() * (values[0] as ArrayLike<T>).length)];
    } else if (values.length > 1) {
        return (values as T[])[Math.floor(Math.random() * (values as T[]).length)];
    } else {
        return undefined;
    }
}
