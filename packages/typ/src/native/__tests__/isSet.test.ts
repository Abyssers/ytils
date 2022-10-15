import { isSet } from "../isSet";

describe("isSet", () => {
    test("object of set", () => {
        expect(isSet(new Set())).toBeTruthy();
        expect(isSet(new Set([0, 1, 2]))).toBeTruthy();
    });

    test("other types", () => {
        expect(isSet(new Number(6))).toBeFalsy();
        expect(isSet(new Number(Infinity))).toBeFalsy();
        expect(isSet(new Number(NaN))).toBeFalsy();
        expect(isSet(new Boolean(false))).toBeFalsy();
        expect(isSet(new String(6))).toBeFalsy();
        expect(isSet({})).toBeFalsy();
        expect(isSet(new Object())).toBeFalsy();
        expect(isSet([])).toBeFalsy();
        expect(isSet(new ArrayBuffer(8))).toBeFalsy();
        expect(isSet(new Array(6))).toBeFalsy();
        expect(isSet(console.log)).toBeFalsy();
        expect(
            isSet(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSet(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSet(async function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSet(async function* () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isSet(async () => {
                /* do something */
            })
        ).toBeFalsy();
        expect(isSet(new Date())).toBeFalsy();
        expect(isSet(new RegExp("6"))).toBeFalsy();
        expect(isSet(new Map())).toBeFalsy();
        expect(isSet(new WeakMap())).toBeFalsy();
        expect(isSet(new WeakSet())).toBeFalsy();
        expect(isSet(6)).toBeFalsy();
        expect(isSet(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isSet(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isSet(BigInt(0b11111111111111111111111111111111111111111111111111111))).toBeFalsy();
        expect(isSet(Infinity)).toBeFalsy();
        expect(isSet(NaN)).toBeFalsy();
        expect(isSet(undefined)).toBeFalsy();
        expect(isSet(null)).toBeFalsy();
        expect(isSet("6")).toBeFalsy();
        expect(isSet(true)).toBeFalsy();
        expect(isSet(Symbol(6))).toBeFalsy();
    });
});
