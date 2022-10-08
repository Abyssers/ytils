import { tagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a GeneratorFunction object or an AsyncGeneratorFunction object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a GeneratorFunction object or an AsyncGeneratorFunction object, else false
 * @example
 *
 * isGenFunc(function* () {})
 * // => true
 *
 * isGenFunc(async function* () {})
 * // => true
 *
 * isGenFunc(function () {})
 * // => false
 *
 * isGenFunc(() => {})
 * // => false
 *
 * isGenFunc("6")
 * // => false
 */
export function isGenFunc(value: any): boolean {
    return tagOf(value) === TypeTag.GeneratorFunction || tagOf(value) === TypeTag.AsyncGeneratorFunction;
}
