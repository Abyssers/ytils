import { isUndefined } from "../isUndefined";

describe("isUndefined", () => {
    test("undefined", () => {
        expect(isUndefined(undefined)).toBeTruthy();
    });

    test("other types", () => {
        expect(isUndefined(null)).toBeFalsy();
        expect(isUndefined(new Number(6))).toBeFalsy();
        expect(isUndefined(new Number(Infinity))).toBeFalsy();
        expect(isUndefined(new Number(NaN))).toBeFalsy();
        expect(isUndefined(6)).toBeFalsy();
        expect(isUndefined(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isUndefined(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isUndefined(Infinity)).toBeFalsy();
        expect(isUndefined(NaN)).toBeFalsy();
        expect(isUndefined(true)).toBeFalsy();
        expect(isUndefined(new Boolean(false))).toBeFalsy();
        expect(isUndefined("6")).toBeFalsy();
        expect(isUndefined(new String(6))).toBeFalsy();
        expect(isUndefined(Symbol(6))).toBeFalsy();
        expect(isUndefined({})).toBeFalsy();
        expect(isUndefined(new Object())).toBeFalsy();
        expect(isUndefined([])).toBeFalsy();
        expect(isUndefined(new Array(6))).toBeFalsy();
        expect(isUndefined(console.log)).toBeFalsy();
        expect(isUndefined(new Date())).toBeFalsy();
        expect(isUndefined(new RegExp("6"))).toBeFalsy();
        expect(isUndefined(new Map())).toBeFalsy();
        expect(isUndefined(new WeakMap())).toBeFalsy();
        expect(isUndefined(new Set())).toBeFalsy();
        expect(isUndefined(new WeakSet())).toBeFalsy();
    });
});
