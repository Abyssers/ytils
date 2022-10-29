import { isObject } from "../isObject";

describe("isObject", () => {
    test("object", () => {
        expect(isObject(new Number(6))).toBeTruthy();
        expect(isObject(new Number(Infinity))).toBeTruthy();
        expect(isObject(new Number(NaN))).toBeTruthy();
        expect(isObject(new Boolean(false))).toBeTruthy();
        expect(isObject(new String(6))).toBeTruthy();
        expect(isObject({})).toBeTruthy();
        expect(isObject(new Object())).toBeTruthy();
        expect(isObject([])).toBeTruthy();
        expect(isObject(new ArrayBuffer(8))).toBeTruthy();
        expect(isObject(new Array(6))).toBeTruthy();
        expect(isObject(console.log)).toBeTruthy();
        expect(
            isObject(function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isObject(() => {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isObject(async function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isObject(async function* () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isObject(async () => {
                /* do something */
            })
        ).toBeTruthy();
        expect(isObject(new Date())).toBeTruthy();
        expect(isObject(new RegExp("6"))).toBeTruthy();
        expect(isObject(new Map())).toBeTruthy();
        expect(isObject(new WeakMap())).toBeTruthy();
        expect(isObject(new Set())).toBeTruthy();
        expect(isObject(new WeakSet())).toBeTruthy();
    });

    test("other types", () => {
        expect(isObject(6)).toBeFalsy();
        expect(isObject(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isObject(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isObject(BigInt(0b11111111111111111111111111111111111111111111111111111))).toBeFalsy();
        expect(isObject(Infinity)).toBeFalsy();
        expect(isObject(NaN)).toBeFalsy();
        expect(isObject(undefined)).toBeFalsy();
        expect(isObject(null)).toBeFalsy();
        expect(isObject("6")).toBeFalsy();
        expect(isObject(true)).toBeFalsy();
        expect(isObject(Symbol(6))).toBeFalsy();
    });
});
