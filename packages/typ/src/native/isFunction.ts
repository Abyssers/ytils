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
export function isFunction<T extends Function>(value: T): value is T;
export function isFunction(value: GeneratorFunction): value is GeneratorFunction;
export function isFunction(value: AsyncGeneratorFunction): value is AsyncGeneratorFunction;
export function isFunction(value: any): boolean;
export function isFunction(value: any): boolean {
    return typeof value === "function" && isNaN(value.nodeType);
}

export const isFunc = isFunction;
