import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a Generator object or an AsyncGenerator object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a Generator object or an AsyncGenerator object, else false
 * @example
 *
 * isGenerator((function* () {})())
 * // => true
 *
 * isGenerator((async function* () {})())
 * // => true
 *
 * isGenerator(function () {})
 * // => false
 *
 * isGenerator(async function () {})
 * // => false
 *
 * isGenerator(() => {})
 * // => false
 */
export function isGenerator<T, TReturn, TNext>(
    value: Generator<T, TReturn, TNext>
): value is Generator<T, TReturn, TNext>;
export function isGenerator<T, TReturn, TNext>(
    value: AsyncGenerator<T, TReturn, TNext>
): value is AsyncGenerator<T, TReturn, TNext>;
export function isGenerator(value: any): boolean;
export function isGenerator(value: any): boolean {
    const typeTag = typeTagOf(value);
    return typeTag === TypeTag.Generator || typeTag === TypeTag.AsyncGenerator;
}

export const isGen = isGenerator;
