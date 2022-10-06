import { isNil } from "../isNil";

describe("isNil", () => {
    test("null", () => {
        expect(isNil(null)).toBeTruthy();
    });

    test("undefined", () => {
        expect(isNil(undefined)).toBeTruthy();
    });

    test("other types", () => {
        expect(isNil(new Number(0))).toBeFalsy();
        expect(isNil(new Number(6))).toBeFalsy();
        expect(isNil(new Number(-6))).toBeFalsy();
        expect(isNil(new Number(6.6))).toBeFalsy();
        expect(isNil(new Number(-6.6))).toBeFalsy();
        expect(isNil(new Number(Infinity))).toBeFalsy();
        expect(isNil(new Number(NaN))).toBeFalsy();
        expect(isNil(0)).toBeFalsy();
        expect(isNil(6)).toBeFalsy();
        expect(isNil(-6)).toBeFalsy();
        expect(isNil(6.6)).toBeFalsy();
        expect(isNil(-6.6)).toBeFalsy();
        expect(isNil(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isNil(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isNil(Infinity)).toBeFalsy();
        expect(isNil(NaN)).toBeFalsy();
        expect(isNil(true)).toBeFalsy();
        expect(isNil(new Boolean(false))).toBeFalsy();
        expect(isNil("6")).toBeFalsy();
        expect(isNil(new String(6))).toBeFalsy();
        expect(isNil(Symbol(6))).toBeFalsy();
        expect(isNil({})).toBeFalsy();
        expect(isNil(new Object())).toBeFalsy();
        expect(isNil([])).toBeFalsy();
        expect(isNil(new Array(6))).toBeFalsy();
        expect(isNil(console.log)).toBeFalsy();
        expect(isNil(new Date())).toBeFalsy();
        expect(isNil(new RegExp("6"))).toBeFalsy();
        expect(isNil(new Map())).toBeFalsy();
        expect(isNil(new WeakMap())).toBeFalsy();
        expect(isNil(new Set())).toBeFalsy();
        expect(isNil(new WeakSet())).toBeFalsy();
    });
});
