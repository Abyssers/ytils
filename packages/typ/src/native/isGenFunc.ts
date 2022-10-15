import { tagOf, Tag } from "../.internal/tag";

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
export function isGenFunc(value: any): value is GeneratorFunction | AsyncGeneratorFunction {
    return tagOf(value) === Tag.GeneratorFunction || tagOf(value) === Tag.AsyncGeneratorFunction;
}
