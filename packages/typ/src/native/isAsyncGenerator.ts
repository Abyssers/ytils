import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is an AsyncGenerator object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an AsyncGenerator object, else false
 * @example
 *
 * isAsyncGenerator((async function* () {})())
 * // => true
 *
 * isAsyncGenerator((function* () {})())
 * // => false
 *
 * isAsyncGenerator(function () {})
 * // => false
 *
 * isAsyncGenerator(async function () {})
 * // => false
 *
 * isAsyncGenerator(() => {})
 * // => false
 */
export function isAsyncGenerator<T, TReturn, TNext>(
    value: AsyncGenerator<T, TReturn, TNext>
): value is AsyncGenerator<T, TReturn, TNext>;
export function isAsyncGenerator(value: any): boolean;
export function isAsyncGenerator(value: any): boolean {
    return typeTagOf(value) === TypeTag.AsyncGenerator;
}

export const isAsyncGen = isAsyncGenerator;
