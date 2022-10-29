import { isSym } from "../isSym";

describe("isSym", () => {
    test("object of symbol", () => {
        expect(isSym(Symbol())).toBeTruthy();
        expect(isSym(Symbol(6))).toBeTruthy();
    });

    test("other types", () => {
        expect(isSym(new Number(6))).toBeFalsy();
        expect(isSym(new Number(Infinity))).toBeFalsy();
        expect(isSym(new Number(NaN))).toBeFalsy();
        expect(isSym(new Boolean(false))).toBeFalsy();
        expect(isSym(new String(6))).toBeFalsy();
        expect(isSym({})).toBeFalsy();
        expect(isSym(new Object())).toBeFalsy();
        expect(isSym([])).toBeFalsy();
        expect(isSym(new ArrayBuffer(8))).toBeFalsy();
        expect(isSym(new Array(6))).toBeFalsy();
        expect(isSym(console.log)).toBeFalsy();
        expect(
            isSym(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSym(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSym(async function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSym(async function* () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSym(async () => {
                /* do something */
            })
        ).toBeFalsy();
        expect(isSym(new Date())).toBeFalsy();
        expect(isSym(new RegExp("6"))).toBeFalsy();
        expect(isSym(new Map())).toBeFalsy();
        expect(isSym(new WeakMap())).toBeFalsy();
        expect(isSym(new WeakSet())).toBeFalsy();
        expect(isSym(6)).toBeFalsy();
        expect(isSym(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isSym(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isSym(BigInt(0b11111111111111111111111111111111111111111111111111111))).toBeFalsy();
        expect(isSym(Infinity)).toBeFalsy();
        expect(isSym(NaN)).toBeFalsy();
        expect(isSym(undefined)).toBeFalsy();
        expect(isSym(null)).toBeFalsy();
        expect(isSym("6")).toBeFalsy();
        expect(isSym(true)).toBeFalsy();
        expect(isSym(new Set())).toBeFalsy();
    });
});
