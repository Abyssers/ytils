import { isNaN } from "../isNaN";

describe("isNaN", () => {
    test("number literal", () => {
        expect(isNaN(NaN)).toBeTruthy();

        expect(isNaN(0)).toBeFalsy();
        expect(isNaN(6)).toBeFalsy();
        expect(isNaN(-6)).toBeFalsy();
        expect(isNaN(6.6)).toBeFalsy();
        expect(isNaN(-6.6)).toBeFalsy();
        expect(isNaN(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isNaN(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isNaN(Infinity)).toBeFalsy();
    });

    test("object of Number", () => {
        expect(isNaN(new Number(NaN))).toBeTruthy();

        expect(isNaN(new Number(0))).toBeFalsy();
        expect(isNaN(new Number(6))).toBeFalsy();
        expect(isNaN(new Number(-6))).toBeFalsy();
        expect(isNaN(new Number(6.6))).toBeFalsy();
        expect(isNaN(new Number(-6.6))).toBeFalsy();
        expect(isNaN(new Number(Infinity))).toBeFalsy();
    });

    test("other types", () => {
        expect(isNaN(undefined)).toBeTruthy();
        expect(isNaN(null)).toBeTruthy();
        expect(isNaN(true)).toBeTruthy();
        expect(isNaN(new Boolean(false))).toBeTruthy();
        expect(isNaN("6")).toBeTruthy();
        expect(isNaN(new String(6))).toBeTruthy();
        expect(isNaN(Symbol(6))).toBeTruthy();
        expect(isNaN({})).toBeTruthy();
        expect(isNaN(new Object())).toBeTruthy();
        expect(isNaN([])).toBeTruthy();
        expect(isNaN(new Array(6))).toBeTruthy();
        expect(isNaN(console.log)).toBeTruthy();
        expect(isNaN(new Date())).toBeTruthy();
        expect(isNaN(new RegExp("6"))).toBeTruthy();
        expect(isNaN(new Map())).toBeTruthy();
        expect(isNaN(new WeakMap())).toBeTruthy();
        expect(isNaN(new Set())).toBeTruthy();
        expect(isNaN(new WeakSet())).toBeTruthy();
    });
});
