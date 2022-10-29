import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a GeneratorFunction object or an AsyncGeneratorFunction object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a GeneratorFunction object or an AsyncGeneratorFunction object, else false
 * @example
 *
 * isGeneratorFunction(function* () {})
 * // => true
 *
 * isGeneratorFunction(async function* () {})
 * // => true
 *
 * isGeneratorFunction(function () {})
 * // => false
 *
 * isGeneratorFunction(() => {})
 * // => false
 *
 * isGeneratorFunction("6")
 * // => false
 */
export function isGeneratorFunction(value: GeneratorFunction): value is GeneratorFunction;
export function isGeneratorFunction(value: AsyncGeneratorFunction): value is AsyncGeneratorFunction;
export function isGeneratorFunction(value: any): boolean;
export function isGeneratorFunction(value: any): boolean {
    const typeTag = typeTagOf(value);
    return typeTag === TypeTag.GeneratorFunction || typeTag === TypeTag.AsyncGeneratorFunction;
}

export const isGenFunc = isGeneratorFunction;
