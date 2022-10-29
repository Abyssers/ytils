/* eslint-disable @typescript-eslint/ban-types */
import { isNaN } from "./isNaN";

/**
 * Checks whether value is a function.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a function, else false
 * @example
 *
 * isFunction(function () {})
 * // => true
 *
 * isFunction(() => {})
 * // => true
 *
 * isFunction(async function () {})
 * // => true
 *
 * isFunction(async () => {})
 * // => true
 *
 * isFunction(function* () {})
 * // => true
 *
 * isFunction(async function* () {})
 * // => true
 */
export function isFunction<P extends any[], R>(value: (...args: P) => R): value is (...args: P) => R;
export function isFunction(value: any): value is (...args: any[]) => any;
export function isFunction(value: any): boolean {
    return typeof value === "function" && isNaN(value.nodeType);
}

export const isFunc = isFunction;
