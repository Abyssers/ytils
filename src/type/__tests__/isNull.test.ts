import { isNull } from "../isNull";

describe("isNull", () => {
    test("null", () => {
        expect(isNull(null)).toBeTruthy();
    });

    test("other types", () => {
        expect(isNull(undefined)).toBeFalsy();
        expect(isNull(new Number(0))).toBeFalsy();
        expect(isNull(new Number(6))).toBeFalsy();
        expect(isNull(new Number(-6))).toBeFalsy();
        expect(isNull(new Number(6.6))).toBeFalsy();
        expect(isNull(new Number(-6.6))).toBeFalsy();
        expect(isNull(new Number(Infinity))).toBeFalsy();
        expect(isNull(new Number(NaN))).toBeFalsy();
        expect(isNull(0)).toBeFalsy();
        expect(isNull(6)).toBeFalsy();
        expect(isNull(-6)).toBeFalsy();
        expect(isNull(6.6)).toBeFalsy();
        expect(isNull(-6.6)).toBeFalsy();
        expect(isNull(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isNull(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isNull(Infinity)).toBeFalsy();
        expect(isNull(NaN)).toBeFalsy();
        expect(isNull(true)).toBeFalsy();
        expect(isNull(new Boolean(false))).toBeFalsy();
        expect(isNull("6")).toBeFalsy();
        expect(isNull(new String(6))).toBeFalsy();
        expect(isNull(Symbol(6))).toBeFalsy();
        expect(isNull({})).toBeFalsy();
        expect(isNull(new Object())).toBeFalsy();
        expect(isNull([])).toBeFalsy();
        expect(isNull(new Array(6))).toBeFalsy();
        expect(isNull(console.log)).toBeFalsy();
        expect(isNull(new Date())).toBeFalsy();
        expect(isNull(new RegExp("6"))).toBeFalsy();
        expect(isNull(new Map())).toBeFalsy();
        expect(isNull(new WeakMap())).toBeFalsy();
        expect(isNull(new Set())).toBeFalsy();
        expect(isNull(new WeakSet())).toBeFalsy();
    });
});
