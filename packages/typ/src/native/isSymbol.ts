import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a Symbol object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a Symbol object, else false
 * @example
 *
 * isSymbol(Symbol())
 * // => true
 *
 * isSymbol(Symbol(6))
 * // => true
 *
 * isSymbol(6)
 * // => false
 *
 * isSymbol("6")
 * // => false
 *
 * isSymbol({})
 * // => false
 *
 * isSymbol([])
 * // => false
 */
export function isSymbol(value: any): value is symbol {
    return typeTagOf(value) === TypeTag.Symbol;
}

export const isSym = isSymbol;
