import { isSymbol } from "../isSymbol";

describe("isSymbol", () => {
    test("object of symbol", () => {
        expect(isSymbol(Symbol())).toBeTruthy();
        expect(isSymbol(Symbol(6))).toBeTruthy();
    });

    test("other types", () => {
        expect(isSymbol(new Number(6))).toBeFalsy();
        expect(isSymbol(new Number(Infinity))).toBeFalsy();
        expect(isSymbol(new Number(NaN))).toBeFalsy();
        expect(isSymbol(new Boolean(false))).toBeFalsy();
        expect(isSymbol(new String(6))).toBeFalsy();
        expect(isSymbol({})).toBeFalsy();
        expect(isSymbol(new Object())).toBeFalsy();
        expect(isSymbol([])).toBeFalsy();
        expect(isSymbol(new ArrayBuffer(8))).toBeFalsy();
        expect(isSymbol(new Array(6))).toBeFalsy();
        expect(isSymbol(console.log)).toBeFalsy();
        expect(
            isSymbol(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSymbol(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSymbol(async function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSymbol(async function* () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSymbol(async () => {
                /* do something */
            })
        ).toBeFalsy();
        expect(isSymbol(new Date())).toBeFalsy();
        expect(isSymbol(new RegExp("6"))).toBeFalsy();
        expect(isSymbol(new Map())).toBeFalsy();
        expect(isSymbol(new WeakMap())).toBeFalsy();
        expect(isSymbol(new WeakSet())).toBeFalsy();
        expect(isSymbol(6)).toBeFalsy();
        expect(isSymbol(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isSymbol(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isSymbol(BigInt(0b11111111111111111111111111111111111111111111111111111))).toBeFalsy();
        expect(isSymbol(Infinity)).toBeFalsy();
        expect(isSymbol(NaN)).toBeFalsy();
        expect(isSymbol(undefined)).toBeFalsy();
        expect(isSymbol(null)).toBeFalsy();
        expect(isSymbol("6")).toBeFalsy();
        expect(isSymbol(true)).toBeFalsy();
        expect(isSymbol(new Set())).toBeFalsy();
    });
});
