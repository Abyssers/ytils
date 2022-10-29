import { isNumber } from "../isNumber";

describe("isNumber", () => {
    test("number literal", () => {
        expect(isNumber(0)).toBeTruthy();
        expect(isNumber(6)).toBeTruthy();
        expect(isNumber(-6)).toBeTruthy();
        expect(isNumber(6.6)).toBeTruthy();
        expect(isNumber(-6.6)).toBeTruthy();
        expect(isNumber(Number.MIN_SAFE_INTEGER)).toBeTruthy();
        expect(isNumber(Number.MAX_SAFE_INTEGER)).toBeTruthy();
        expect(isNumber(Infinity)).toBeTruthy();

        expect(isNumber(NaN)).toBeFalsy();
    });

    test("object of Number", () => {
        expect(isNumber(new Number(0))).toBeTruthy();
        expect(isNumber(new Number(6))).toBeTruthy();
        expect(isNumber(new Number(-6))).toBeTruthy();
        expect(isNumber(new Number(6.6))).toBeTruthy();
        expect(isNumber(new Number(-6.6))).toBeTruthy();
        expect(isNumber(new Number(Infinity))).toBeTruthy();

        expect(isNumber(new Number(NaN))).toBeFalsy();
    });

    test("other types", () => {
        expect(isNumber(undefined)).toBeFalsy();
        expect(isNumber(null)).toBeFalsy();
        expect(isNumber(true)).toBeFalsy();
        expect(isNumber(new Boolean(false))).toBeFalsy();
        expect(isNumber("6")).toBeFalsy();
        expect(isNumber(new String(6))).toBeFalsy();
        expect(isNumber(Symbol(6))).toBeFalsy();
        expect(isNumber({})).toBeFalsy();
        expect(isNumber(new Object())).toBeFalsy();
        expect(isNumber([])).toBeFalsy();
        expect(isNumber(new Array(6))).toBeFalsy();
        expect(isNumber(console.log)).toBeFalsy();
        expect(isNumber(new Date())).toBeFalsy();
        expect(isNumber(new RegExp("6"))).toBeFalsy();
        expect(isNumber(new Map())).toBeFalsy();
        expect(isNumber(new WeakMap())).toBeFalsy();
        expect(isNumber(new Set())).toBeFalsy();
        expect(isNumber(new WeakSet())).toBeFalsy();
    });
});
