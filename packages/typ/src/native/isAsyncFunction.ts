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
 * // => false
 *
 * isAsyncFunction(() => {})
 * // => false
 */
export function isAsyncFunction<P extends any[], R extends Promise<any>>(
    value: (...args: P) => R
): value is (...args: P) => R;
export function isAsyncFunction(value: any): value is (...args: any[]) => Promise<any>;
export function isAsyncFunction(value: any): boolean {
    return typeTagOf(value) === TypeTag.AsyncFunction;
}

export const isAsyncFunc = isAsyncFunction;
