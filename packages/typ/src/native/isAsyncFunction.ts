/* eslint-disable @typescript-eslint/ban-types */
import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is an async function.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an async function, else false
 * @example
 *
 * isAsyncFunction(async () => {})
 * // => true
 *
 * isAsyncFunction(async function () {})
 * // => true
 *
 * isAsyncFunction(async function* () {})
 * // => true
 *
 * isAsyncFunction(() => {})
 * // => false
 */
export function isAsyncFunction<T extends Function>(value: T): value is T;
export function isAsyncFunction(value: AsyncGeneratorFunction): value is AsyncGeneratorFunction;
export function isAsyncFunction(value: any): boolean;
export function isAsyncFunction(value: any): boolean {
    const typeTag = typeTagOf(value);
    return typeTag === TypeTag.AsyncFunction || typeTag === TypeTag.AsyncGeneratorFunction;
}

export const isAsyncFunc = isAsyncFunction;
