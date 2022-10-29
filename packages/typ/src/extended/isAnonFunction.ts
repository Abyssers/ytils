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
export function isAnonFunction<T extends Function>(value: T): value is T;
export function isAnonFunction(value: GeneratorFunction): value is GeneratorFunction;
export function isAnonFunction(value: AsyncGeneratorFunction): value is AsyncGeneratorFunction;
export function isAnonFunction(value: any): boolean;
export function isAnonFunction(value: any): boolean {
    return isFunction(value) && value.name === "";
}

export const isAnonFunc = isAnonFunction;
