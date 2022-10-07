/**
 * Gets the last element of a sequentially indexable object.
 * @param value The value from which the element can be getted
 * @returns Returns the last element of value
 */
export function lastOf<T>(value: ArrayLike<T>): T | undefined;
export function lastOf<T>(value: RelativeIndexable<T>): T | undefined;
export function lastOf<T>(value: ArrayLike<T> | RelativeIndexable<T>): T | undefined {
    return value != null
        ? (value as ArrayLike<T>)[(value as ArrayLike<T>).length - 1] || (value as RelativeIndexable<T>).at(-1)
        : undefined;
}
