import { isUndef } from "../isUndef";

describe("isUndef", () => {
    test("undefined", () => {
        expect(isUndef(undefined)).toBeTruthy();
    });

    test("other types", () => {
        expect(isUndef(null)).toBeFalsy();
        expect(isUndef(new Number(6))).toBeFalsy();
        expect(isUndef(new Number(Infinity))).toBeFalsy();
        expect(isUndef(new Number(NaN))).toBeFalsy();
        expect(isUndef(6)).toBeFalsy();
        expect(isUndef(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isUndef(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isUndef(Infinity)).toBeFalsy();
        expect(isUndef(NaN)).toBeFalsy();
        expect(isUndef(true)).toBeFalsy();
        expect(isUndef(new Boolean(false))).toBeFalsy();
        expect(isUndef("6")).toBeFalsy();
        expect(isUndef(new String(6))).toBeFalsy();
        expect(isUndef(Symbol(6))).toBeFalsy();
        expect(isUndef({})).toBeFalsy();
        expect(isUndef(new Object())).toBeFalsy();
        expect(isUndef([])).toBeFalsy();
        expect(isUndef(new Array(6))).toBeFalsy();
        expect(isUndef(console.log)).toBeFalsy();
        expect(isUndef(new Date())).toBeFalsy();
        expect(isUndef(new RegExp("6"))).toBeFalsy();
        expect(isUndef(new Map())).toBeFalsy();
        expect(isUndef(new WeakMap())).toBeFalsy();
        expect(isUndef(new Set())).toBeFalsy();
        expect(isUndef(new WeakSet())).toBeFalsy();
    });
});
