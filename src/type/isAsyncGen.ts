import { tagOf, TypeTag } from "../.core/tag";

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
export function isAsyncGen(value: any): boolean {
    return tagOf(value) === TypeTag.AsyncGenerator;
}
