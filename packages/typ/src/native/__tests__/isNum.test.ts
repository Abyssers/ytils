import { isNum } from "../isNum";

describe("isNum", () => {
    test("number literal", () => {
        expect(isNum(0)).toBeTruthy();
        expect(isNum(6)).toBeTruthy();
        expect(isNum(-6)).toBeTruthy();
        expect(isNum(6.6)).toBeTruthy();
        expect(isNum(-6.6)).toBeTruthy();
        expect(isNum(Number.MIN_SAFE_INTEGER)).toBeTruthy();
        expect(isNum(Number.MAX_SAFE_INTEGER)).toBeTruthy();
        expect(isNum(Infinity)).toBeTruthy();

        expect(isNum(NaN)).toBeFalsy();
    });

    test("object of Number", () => {
        expect(isNum(new Number(0))).toBeTruthy();
        expect(isNum(new Number(6))).toBeTruthy();
        expect(isNum(new Number(-6))).toBeTruthy();
        expect(isNum(new Number(6.6))).toBeTruthy();
        expect(isNum(new Number(-6.6))).toBeTruthy();
        expect(isNum(new Number(Infinity))).toBeTruthy();

        expect(isNum(new Number(NaN))).toBeFalsy();
    });

    test("other types", () => {
        expect(isNum(undefined)).toBeFalsy();
        expect(isNum(null)).toBeFalsy();
        expect(isNum(true)).toBeFalsy();
        expect(isNum(new Boolean(false))).toBeFalsy();
        expect(isNum("6")).toBeFalsy();
        expect(isNum(new String(6))).toBeFalsy();
        expect(isNum(Symbol(6))).toBeFalsy();
        expect(isNum({})).toBeFalsy();
        expect(isNum(new Object())).toBeFalsy();
        expect(isNum([])).toBeFalsy();
        expect(isNum(new Array(6))).toBeFalsy();
        expect(isNum(console.log)).toBeFalsy();
        expect(isNum(new Date())).toBeFalsy();
        expect(isNum(new RegExp("6"))).toBeFalsy();
        expect(isNum(new Map())).toBeFalsy();
        expect(isNum(new WeakMap())).toBeFalsy();
        expect(isNum(new Set())).toBeFalsy();
        expect(isNum(new WeakSet())).toBeFalsy();
    });
});
