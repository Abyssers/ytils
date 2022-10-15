import { isStr } from "../isStr";

describe("isStr", () => {
    test("string literal", () => {
        expect(isStr("6")).toBeTruthy();
        expect(isStr(" ")).toBeTruthy();
        expect(isStr("")).toBeTruthy();
        expect(isStr("AAABBB")).toBeTruthy();
    });

    test("object of String", () => {
        expect(isStr(new String(6))).toBeTruthy();
        expect(isStr(new String())).toBeTruthy();
    });

    test("other types", () => {
        expect(isStr(new Number(6))).toBeFalsy();
        expect(isStr(new Number(Infinity))).toBeFalsy();
        expect(isStr(new Number(NaN))).toBeFalsy();
        expect(isStr(new Boolean(false))).toBeFalsy();
        expect(isStr({})).toBeFalsy();
        expect(isStr(new Object())).toBeFalsy();
        expect(isStr([])).toBeFalsy();
        expect(isStr(new ArrayBuffer(8))).toBeFalsy();
        expect(isStr(new Array(6))).toBeFalsy();
        expect(isStr(console.log)).toBeFalsy();
        expect(
            isStr(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isStr(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isStr(async function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isStr(async function* () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isStr(async () => {
                /* do something */
            })
        ).toBeFalsy();
        expect(isStr(new Date())).toBeFalsy();
        expect(isStr(new RegExp("6"))).toBeFalsy();
        expect(isStr(new Map())).toBeFalsy();
        expect(isStr(new WeakMap())).toBeFalsy();
        expect(isStr(new Set())).toBeFalsy();
        expect(isStr(new WeakSet())).toBeFalsy();
        expect(isStr(6)).toBeFalsy();
        expect(isStr(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isStr(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isStr(BigInt(0b11111111111111111111111111111111111111111111111111111))).toBeFalsy();
        expect(isStr(Infinity)).toBeFalsy();
        expect(isStr(NaN)).toBeFalsy();
        expect(isStr(undefined)).toBeFalsy();
        expect(isStr(null)).toBeFalsy();
        expect(isStr(true)).toBeFalsy();
        expect(isStr(Symbol(6))).toBeFalsy();
    });
});
