import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is an AsyncGenerator object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an AsyncGenerator object, else false
 * @example
 *
 * isAsyncGen((async function* () {})())
 * // => true
 *
 * isAsyncGen((function* () {})())
 * // => false
 *
 * isAsyncGen(function () {})
 * // => false
 *
 * isAsyncGen(async function () {})
 * // => false
 *
 * isAsyncGen(() => {})
 * // => false
 */
export function isAsyncGen<T, TReturn, TNext>(value: any): value is AsyncGenerator<T, TReturn, TNext> {
    return tagOf(value) === Tag.AsyncGenerator;
}
