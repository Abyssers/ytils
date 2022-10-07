import { tagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is an AsyncGeneratorFunction object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an AsyncGeneratorFunction object, else false
 * @example
 *
 * isAsyncGenFunc(async function* () {})
 * // => true
 *
 * isAsyncGenFunc(function* () {})
 * // => false
 *
 * isAsyncGenFunc(function () {})
 * // => false
 *
 * isAsyncGenFunc(() => {})
 * // => false
 *
 * isAsyncGenFunc("6")
 * // => false
 */
export function isAsyncGenFunc(value: any): boolean {
    return tagOf(value) === TypeTag.AsyncGeneratorFunction;
}
