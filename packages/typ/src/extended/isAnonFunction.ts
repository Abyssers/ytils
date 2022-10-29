/* eslint-disable @typescript-eslint/ban-types */
import { isFunction } from "../native/isFunction";

/**
 * Checks whether value is an anonymous function.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is an anonymous function, else false
 * @example
 *
 * isAnonFunction(function () {})
 * // => true
 *
 * isAnonFunction(() => {})
 * // => true
 *
 * isAnonFunction(async function () {})
 * // => true
 *
 * isAnonFunction(async () => {})
 * // => true
 *
 * isAnonFunction(function* () {})
 * // => true
 *
 * isAnonFunction(async function* () {})
 * // => true
 *
 * isAnonFunction(function hello() {})
 * // => false
 */
export function isAnonFunction<P extends any[], R>(value: (...args: P) => R): value is (...args: P) => R;
export function isAnonFunction(value: any): value is (...args: any[]) => any;
export function isAnonFunction(value: any): boolean {
    return isFunction(value) && value.name === "";
}

export const isAnonFunc = isAnonFunction;
