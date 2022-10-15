import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a kind of Error object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a kind of Error object, else false
 * @example
 *
 * isErr(new Error())
 * // => true
 *
 * isErr(new EvalError())
 * // => true
 *
 * isErr(new SyntaxError())
 * // => true
 *
 * isErr(new TypeError())
 * // => true
 *
 * isErr(new URIError())
 * // => true
 *
 * isErr(6)
 * // => false
 *
 * isErr("6")
 * // => false
 */
export function isErr(value: any): value is Error {
    return tagOf(value) === Tag.Error;
}
