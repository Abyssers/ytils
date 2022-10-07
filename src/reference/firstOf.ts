/**
 * Gets the first element of a sequentially indexable object.
 * @param value The value from which the element can be getted
 * @returns Returns the first element of value
 */
export function firstOf<T>(value: ArrayLike<T>): T | undefined;
export function firstOf<T>(value: RelativeIndexable<T>): T | undefined;
export function firstOf<T>(value: ArrayLike<T> | RelativeIndexable<T>): T | undefined {
    return value != null ? (value as ArrayLike<T>)[0] || (value as RelativeIndexable<T>).at(0) : undefined;
}
