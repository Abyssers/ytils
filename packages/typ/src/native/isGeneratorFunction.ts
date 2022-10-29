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
export function isGeneratorFunction<P extends any[], R extends Generator<any, any, any>>(
    value: (...args: P) => R
): value is (...args: P) => R;
export function isGeneratorFunction<P extends any[], R extends AsyncGenerator<any, any, any>>(
    value: (...args: P) => R
): value is (...args: P) => R;
export function isGeneratorFunction(
    value: any
): value is (...arg: any[]) => Generator<any, any, any> | ((...arg: any[]) => AsyncGenerator<any, any, any>);
export function isGeneratorFunction(value: any): boolean {
    const typeTag = typeTagOf(value);
    return typeTag === TypeTag.GeneratorFunction || typeTag === TypeTag.AsyncGeneratorFunction;
}

export const isGenFunc = isGeneratorFunction;
