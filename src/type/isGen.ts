import { tagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a Generator object or an AsyncGenerator object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a Generator object or an AsyncGenerator object, else false
 * @example
 *
 * isGen((function* () {})())
 * // => true
 *
 * isGen((async function* () {})())
 * // => true
 *
 * isGen(function () {})
 * // => false
 *
 * isGen(async function () {})
 * // => false
 *
 * isGen(() => {})
 * // => false
 */
export function isGen(value: any): boolean {
    return tagOf(value) === TypeTag.Generator || tagOf(value) === TypeTag.AsyncGenerator;
}
