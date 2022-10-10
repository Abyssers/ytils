import { isObj } from "../isObj";

describe("isObj", () => {
    test("object", () => {
        expect(isObj(new Number(6))).toBeTruthy();
        expect(isObj(new Number(Infinity))).toBeTruthy();
        expect(isObj(new Number(NaN))).toBeTruthy();
        expect(
            isObj(() => {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isObj(async function* () {
                /* do something */
            })
        ).toBeTruthy();
        expect(isObj(new Boolean(false))).toBeTruthy();
        expect(isObj(new String(6))).toBeTruthy();
        expect(isObj({})).toBeTruthy();
        expect(isObj(new Object())).toBeTruthy();
        expect(isObj([])).toBeTruthy();
        expect(isObj(new ArrayBuffer(8))).toBeTruthy();
        expect(isObj(new Array(6))).toBeTruthy();
        expect(isObj(console.log)).toBeTruthy();
        expect(isObj(new Date())).toBeTruthy();
        expect(isObj(new RegExp("6"))).toBeTruthy();
        expect(isObj(new Map())).toBeTruthy();
        expect(isObj(new WeakMap())).toBeTruthy();
        expect(isObj(new Set())).toBeTruthy();
        expect(isObj(new WeakSet())).toBeTruthy();
    });

    test("other types", () => {
        expect(isObj(6)).toBeFalsy();
        expect(isObj(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isObj(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isObj(BigInt(0b11111111111111111111111111111111111111111111111111111))).toBeFalsy();
        expect(isObj(Infinity)).toBeFalsy();
        expect(isObj(NaN)).toBeFalsy();
        expect(isObj(undefined)).toBeFalsy();
        expect(isObj(null)).toBeFalsy();
        expect(isObj("6")).toBeFalsy();
        expect(isObj(true)).toBeFalsy();
        expect(isObj(Symbol(6))).toBeFalsy();
    });
});
