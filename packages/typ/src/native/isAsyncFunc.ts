import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is an async function.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an async function, else false
 * @example
 *
 * isAsyncFunc(async () => {})
 * // => true
 *
 * isAsyncFunc(async function () {})
 * // => true
 *
 * isAsyncFunc(async function* () {})
 * // => true
 *
 * isAsyncFunc(() => {})
 * // => false
 */
export function isAsyncFunc(value: any): value is (...args: any[]) => Promise<any> | AsyncGeneratorFunction {
    return tagOf(value) === Tag.AsyncFunction || tagOf(value) === Tag.AsyncGeneratorFunction;
}
