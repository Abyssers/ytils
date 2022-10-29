import { typeTagOf, TypeTag } from "../.internal/tag";
import { isNumber } from "./isNumber";

/**
 * Checks whether value is a valid Date object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a valid Date object, else false
 * @example
 *
 * isDate(new Date(1))
 * // => true
 *
 * isDate(new Date("Mon Sep 26 2022 19:47:34 GMT+0800"))
 * // => true
 *
 * isDate(new Date("666"))
 * // => true
 *
 * isDate(new Date(Infinity))
 * // => false
 *
 * isDate(new Date(NaN))
 * // => false
 *
 * isDate({})
 * // => false
 */
export function isDate(value: any): value is Date {
    return typeTagOf(value) === TypeTag.Date && isNumber(value.getTime());
}
