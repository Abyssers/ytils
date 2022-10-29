import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is an AsyncGeneratorFunction object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an AsyncGeneratorFunction object, else false
 * @example
 *
 * isAsyncGeneratorFunction(async function* () {})
 * // => true
 *
 * isAsyncGeneratorFunction(function* () {})
 * // => false
 *
 * isAsyncGeneratorFunction(function () {})
 * // => false
 *
 * isAsyncGeneratorFunction(() => {})
 * // => false
 *
 * isAsyncGeneratorFunction("6")
 * // => false
 */
export function isAsyncGeneratorFunction(value: any): value is AsyncGeneratorFunction {
    return typeTagOf(value) === TypeTag.AsyncGeneratorFunction;
}

export const isAsyncGenFunc = isAsyncGeneratorFunction;
