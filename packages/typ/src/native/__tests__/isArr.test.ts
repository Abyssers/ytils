import { isArr } from "../isArr";

describe("isArr", () => {
    test("object of Array", () => {
        expect(isArr([])).toBeTruthy();
        expect(isArr([6])).toBeTruthy();
        expect(isArr(["6"])).toBeTruthy();
        expect(isArr(new Array(6))).toBeTruthy();
    });

    test("other types", () => {
        expect(isArr(undefined)).toBeFalsy();
        expect(isArr(null)).toBeFalsy();
        expect(isArr(6)).toBeFalsy();
        expect(isArr(new Number(6.6))).toBeFalsy();
        expect(isArr("6")).toBeFalsy();
        expect(isArr(new String(6.6))).toBeFalsy();
        expect(isArr(Symbol(6))).toBeFalsy();
        expect(isArr({})).toBeFalsy();
        expect(isArr(new Object())).toBeFalsy();
        expect(isArr(console.log)).toBeFalsy();
        expect(isArr(new RegExp("6"))).toBeFalsy();
        expect(isArr(new Map())).toBeFalsy();
        expect(isArr(new WeakMap())).toBeFalsy();
        expect(isArr(new Set())).toBeFalsy();
        expect(isArr(new WeakSet())).toBeFalsy();
    });
});
