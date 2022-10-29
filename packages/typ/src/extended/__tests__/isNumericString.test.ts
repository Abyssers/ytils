import { isNumericString } from "../isNumericString";

describe("isNumericString", () => {
    test("string literal", () => {
        expect(isNumericString("6")).toBeTruthy();
        expect(isNumericString("0")).toBeTruthy();
        expect(isNumericString("-6")).toBeTruthy();
        expect(isNumericString("6.66")).toBeTruthy();
        expect(isNumericString("Infinity")).toBeTruthy();

        expect(isNumericString("abc")).toBeFalsy();
    });

    test("object of String", () => {
        expect(isNumericString(new String(6))).toBeTruthy();
        expect(isNumericString(new String(0))).toBeTruthy();
        expect(isNumericString(new String(-6))).toBeTruthy();
        expect(isNumericString(new String(6.66))).toBeTruthy();
        expect(isNumericString(new String(Infinity))).toBeTruthy();

        expect(isNumericString(new String("abc"))).toBeFalsy();
    });

    test("other types", () => {
        expect(isNumericString(undefined)).toBeFalsy();
        expect(isNumericString(new Number(6))).toBeFalsy();
        expect(isNumericString(new Number(Infinity))).toBeFalsy();
        expect(isNumericString(new Number(NaN))).toBeFalsy();
        expect(isNumericString(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isNumericString(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isNumericString(Infinity)).toBeFalsy();
        expect(isNumericString(NaN)).toBeFalsy();
        expect(isNumericString(true)).toBeFalsy();
        expect(isNumericString(new Boolean(false))).toBeFalsy();
        expect(isNumericString(null)).toBeFalsy();
        expect(isNumericString(Symbol(6))).toBeFalsy();
        expect(isNumericString({})).toBeFalsy();
        expect(isNumericString(new Object())).toBeFalsy();
        expect(isNumericString([])).toBeFalsy();
        expect(isNumericString(new Array(6))).toBeFalsy();
        expect(isNumericString(console.log)).toBeFalsy();
        expect(isNumericString(new Date())).toBeFalsy();
        expect(isNumericString(new RegExp("6"))).toBeFalsy();
        expect(isNumericString(new Map())).toBeFalsy();
        expect(isNumericString(new WeakMap())).toBeFalsy();
        expect(isNumericString(new Set())).toBeFalsy();
        expect(isNumericString(new WeakSet())).toBeFalsy();
    });
});
