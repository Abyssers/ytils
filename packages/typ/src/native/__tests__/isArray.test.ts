import { isArray } from "../isArray";

describe("isArray", () => {
    test("object of Array", () => {
        expect(isArray([])).toBeTruthy();
        expect(isArray([6])).toBeTruthy();
        expect(isArray(["6"])).toBeTruthy();
        expect(isArray(new Array(6))).toBeTruthy();
    });

    test("other types", () => {
        expect(isArray(undefined)).toBeFalsy();
        expect(isArray(null)).toBeFalsy();
        expect(isArray(6)).toBeFalsy();
        expect(isArray(new Number(6.6))).toBeFalsy();
        expect(isArray("6")).toBeFalsy();
        expect(isArray(new String(6.6))).toBeFalsy();
        expect(isArray(Symbol(6))).toBeFalsy();
        expect(isArray({})).toBeFalsy();
        expect(isArray(new Object())).toBeFalsy();
        expect(isArray(console.log)).toBeFalsy();
        expect(isArray(new RegExp("6"))).toBeFalsy();
        expect(isArray(new Map())).toBeFalsy();
        expect(isArray(new WeakMap())).toBeFalsy();
        expect(isArray(new Set())).toBeFalsy();
        expect(isArray(new WeakSet())).toBeFalsy();
    });
});
