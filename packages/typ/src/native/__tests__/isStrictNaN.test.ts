import { isStrictNaN } from "../isStrictNaN";

describe("isStrictNaN", () => {
    test("number literal", () => {
        expect(isStrictNaN(NaN)).toBeTruthy();

        expect(isStrictNaN(0)).toBeFalsy();
        expect(isStrictNaN(6)).toBeFalsy();
        expect(isStrictNaN(-6)).toBeFalsy();
        expect(isStrictNaN(6.6)).toBeFalsy();
        expect(isStrictNaN(-6.6)).toBeFalsy();
        expect(isStrictNaN(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isStrictNaN(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isStrictNaN(Infinity)).toBeFalsy();
    });

    test("object of Number", () => {
        expect(isStrictNaN(new Number(NaN))).toBeTruthy();

        expect(isStrictNaN(new Number(0))).toBeFalsy();
        expect(isStrictNaN(new Number(6))).toBeFalsy();
        expect(isStrictNaN(new Number(-6))).toBeFalsy();
        expect(isStrictNaN(new Number(6.6))).toBeFalsy();
        expect(isStrictNaN(new Number(-6.6))).toBeFalsy();
        expect(isStrictNaN(new Number(Infinity))).toBeFalsy();
    });

    test("other types", () => {
        expect(isStrictNaN(undefined)).toBeFalsy();
        expect(isStrictNaN(null)).toBeFalsy();
        expect(isStrictNaN(true)).toBeFalsy();
        expect(isStrictNaN(new Boolean(false))).toBeFalsy();
        expect(isStrictNaN("6")).toBeFalsy();
        expect(isStrictNaN(new String(6))).toBeFalsy();
        expect(isStrictNaN(Symbol(6))).toBeFalsy();
        expect(isStrictNaN({})).toBeFalsy();
        expect(isStrictNaN(new Object())).toBeFalsy();
        expect(isStrictNaN([])).toBeFalsy();
        expect(isStrictNaN(new Array(6))).toBeFalsy();
        expect(isStrictNaN(console.log)).toBeFalsy();
        expect(isStrictNaN(new Date())).toBeFalsy();
        expect(isStrictNaN(new RegExp("6"))).toBeFalsy();
        expect(isStrictNaN(new Map())).toBeFalsy();
        expect(isStrictNaN(new WeakMap())).toBeFalsy();
        expect(isStrictNaN(new Set())).toBeFalsy();
        expect(isStrictNaN(new WeakSet())).toBeFalsy();
    });
});
