import { isString } from "../isString";

describe("isString", () => {
    test("string literal", () => {
        expect(isString("6")).toBeTruthy();
        expect(isString(" ")).toBeTruthy();
        expect(isString("")).toBeTruthy();
        expect(isString("AAABBB")).toBeTruthy();
    });

    test("object of String", () => {
        expect(isString(new String(6))).toBeTruthy();
        expect(isString(new String())).toBeTruthy();
    });

    test("other types", () => {
        expect(isString(new Number(6))).toBeFalsy();
        expect(isString(new Number(Infinity))).toBeFalsy();
        expect(isString(new Number(NaN))).toBeFalsy();
        expect(isString(new Boolean(false))).toBeFalsy();
        expect(isString({})).toBeFalsy();
        expect(isString(new Object())).toBeFalsy();
        expect(isString([])).toBeFalsy();
        expect(isString(new ArrayBuffer(8))).toBeFalsy();
        expect(isString(new Array(6))).toBeFalsy();
        expect(isString(console.log)).toBeFalsy();
        expect(
            isString(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isString(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isString(async function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isString(async function* () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isString(async () => {
                /* do something */
            })
        ).toBeFalsy();
        expect(isString(new Date())).toBeFalsy();
        expect(isString(new RegExp("6"))).toBeFalsy();
        expect(isString(new Map())).toBeFalsy();
        expect(isString(new WeakMap())).toBeFalsy();
        expect(isString(new Set())).toBeFalsy();
        expect(isString(new WeakSet())).toBeFalsy();
        expect(isString(6)).toBeFalsy();
        expect(isString(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isString(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isString(BigInt(0b11111111111111111111111111111111111111111111111111111))).toBeFalsy();
        expect(isString(Infinity)).toBeFalsy();
        expect(isString(NaN)).toBeFalsy();
        expect(isString(undefined)).toBeFalsy();
        expect(isString(null)).toBeFalsy();
        expect(isString(true)).toBeFalsy();
        expect(isString(Symbol(6))).toBeFalsy();
    });
});
