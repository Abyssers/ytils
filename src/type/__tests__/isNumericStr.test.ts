import { isNumericStr } from "../isNumericStr";

describe("isNumericStr", () => {
    test("string literal", () => {
        expect(isNumericStr("6")).toBeTruthy();
        expect(isNumericStr("0")).toBeTruthy();
        expect(isNumericStr("-6")).toBeTruthy();
        expect(isNumericStr("6.66")).toBeTruthy();
        expect(isNumericStr("Infinity")).toBeTruthy();

        expect(isNumericStr("abc")).toBeFalsy();
    });

    test("object of String", () => {
        expect(isNumericStr(new String(6))).toBeTruthy();
        expect(isNumericStr(new String(0))).toBeTruthy();
        expect(isNumericStr(new String(-6))).toBeTruthy();
        expect(isNumericStr(new String(6.66))).toBeTruthy();
        expect(isNumericStr(new String(Infinity))).toBeTruthy();

        expect(isNumericStr(new String("abc"))).toBeFalsy();
    });

    test("other types", () => {
        expect(isNumericStr(undefined)).toBeFalsy();
        expect(isNumericStr(new Number(6))).toBeFalsy();
        expect(isNumericStr(new Number(Infinity))).toBeFalsy();
        expect(isNumericStr(new Number(NaN))).toBeFalsy();
        expect(isNumericStr(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isNumericStr(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isNumericStr(Infinity)).toBeFalsy();
        expect(isNumericStr(NaN)).toBeFalsy();
        expect(isNumericStr(true)).toBeFalsy();
        expect(isNumericStr(new Boolean(false))).toBeFalsy();
        expect(isNumericStr(null)).toBeFalsy();
        expect(isNumericStr(Symbol(6))).toBeFalsy();
        expect(isNumericStr({})).toBeFalsy();
        expect(isNumericStr(new Object())).toBeFalsy();
        expect(isNumericStr([])).toBeFalsy();
        expect(isNumericStr(new Array(6))).toBeFalsy();
        expect(isNumericStr(console.log)).toBeFalsy();
        expect(isNumericStr(new Date())).toBeFalsy();
        expect(isNumericStr(new RegExp("6"))).toBeFalsy();
        expect(isNumericStr(new Map())).toBeFalsy();
        expect(isNumericStr(new WeakMap())).toBeFalsy();
        expect(isNumericStr(new Set())).toBeFalsy();
        expect(isNumericStr(new WeakSet())).toBeFalsy();
    });
});
