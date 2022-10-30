import { isNum, isBool, isStr } from "@ytils/typ";

/**
 * Gets the primitive value of a primitive-data-type value.
 * @param {number | boolean | string | bigint | symbol} value The value to be got from
 * @returns {number | boolean | string | bigint | symbol} Returns the primitive value of value
 * @example
 *
 * primitiveValueOf(6)
 * // => 6
 *
 * primitiveValueOf(new Number(6))
 * // => 6
 *
 * primitiveValueOf("6")
 * // => "6"
 *
 * primitiveValueOf(new String(6))
 * // => "6"
 */
export function primitiveValueOf(value: number): number;
export function primitiveValueOf(value: boolean): boolean;
export function primitiveValueOf(value: string): string;
export function primitiveValueOf(value: bigint): bigint;
export function primitiveValueOf(value: symbol): symbol;
export function primitiveValueOf(
    value: number | boolean | string | bigint | symbol
): number | boolean | string | bigint | symbol {
    const typeOf = typeof value;
    if (
        value == null ||
        typeOf === "number" ||
        typeOf === "boolean" ||
        typeOf === "string" ||
        typeOf === "bigint" ||
        typeOf === "symbol"
    ) {
        return value;
    }
    if (isNum(value) || isBool(value) || isStr(value)) {
        return value.valueOf();
    }
    return null;
}

export const primValOf = primitiveValueOf;
export const literalOf = primitiveValueOf;
