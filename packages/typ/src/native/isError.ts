import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a kind of Error object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a kind of Error object, else false
 * @example
 *
 * isError(new Error())
 * // => true
 *
 * isError(new EvalError())
 * // => true
 *
 * isError(new SyntaxError())
 * // => true
 *
 * isError(new TypeError())
 * // => true
 *
 * isError(new URIError())
 * // => true
 *
 * isError(6)
 * // => false
 *
 * isError("6")
 * // => false
 */
export function isError(value: any): value is Error {
    return typeTagOf(value) === TypeTag.Error;
}

export const isErr = isError;
