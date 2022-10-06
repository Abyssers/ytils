import { isFloat } from "../isFloat";

describe("isFloat", () => {
    test("number literal", () => {
        expect(isFloat(6.66)).toBeTruthy();
        expect(isFloat(+6.66)).toBeTruthy();
        expect(isFloat(-6.66)).toBeTruthy();

        expect(isFloat(6)).toBeFalsy();
        expect(isFloat(6.0)).toBeFalsy();
        expect(isFloat(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isFloat(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isFloat(Infinity)).toBeFalsy();
        expect(isFloat(NaN)).toBeFalsy();
    });

    test("object of Number", () => {
        expect(isFloat(new Number(6.66))).toBeTruthy();
        expect(isFloat(new Number(+6.66))).toBeTruthy();
        expect(isFloat(new Number(-6.66))).toBeTruthy();

        expect(isFloat(new Number(6))).toBeFalsy();
        expect(isFloat(new Number(6.0))).toBeFalsy();
        expect(isFloat(new Number(Infinity))).toBeFalsy();
        expect(isFloat(new Number(NaN))).toBeFalsy();
    });

    test("other types", () => {
        expect(isFloat(undefined)).toBeFalsy();
        expect(isFloat(null)).toBeFalsy();
        expect(isFloat(true)).toBeFalsy();
        expect(isFloat(new Boolean(false))).toBeFalsy();
        expect(isFloat("6")).toBeFalsy();
        expect(isFloat(new String(6))).toBeFalsy();
        expect(isFloat(Symbol(6))).toBeFalsy();
        expect(isFloat({})).toBeFalsy();
        expect(isFloat(new Object())).toBeFalsy();
        expect(isFloat([])).toBeFalsy();
        expect(isFloat(new Array(6))).toBeFalsy();
        expect(isFloat(console.log)).toBeFalsy();
        expect(isFloat(new Date())).toBeFalsy();
        expect(isFloat(new RegExp("6"))).toBeFalsy();
        expect(isFloat(new Map())).toBeFalsy();
        expect(isFloat(new WeakMap())).toBeFalsy();
        expect(isFloat(new Set())).toBeFalsy();
        expect(isFloat(new WeakSet())).toBeFalsy();
    });
});
