import { isBool } from "../isBool";

describe("isBool", () => {
    test("boolean literal", () => {
        expect(isBool(true)).toBeTruthy();
        expect(isBool(false)).toBeTruthy();
    });

    test("object of Boolean", () => {
        expect(isBool(new Boolean(true))).toBeTruthy();
        expect(isBool(new Boolean(false))).toBeTruthy();
        expect(isBool(new Boolean(6))).toBeTruthy();
        expect(isBool(new Boolean(6.66))).toBeTruthy();
        expect(isBool(new Boolean("6.666"))).toBeTruthy();
    });

    test("other types", () => {
        expect(isBool(undefined)).toBeFalsy();
        expect(isBool(null)).toBeFalsy();
        expect(isBool(6)).toBeFalsy();
        expect(isBool(new Number(6.6))).toBeFalsy();
        expect(isBool("6")).toBeFalsy();
        expect(isBool(new String(6.6))).toBeFalsy();
        expect(isBool(Symbol(6))).toBeFalsy();
        expect(isBool({})).toBeFalsy();
        expect(isBool(new Object())).toBeFalsy();
        expect(isBool([])).toBeFalsy();
        expect(isBool(new Array(6))).toBeFalsy();
        expect(isBool(console.log)).toBeFalsy();
        expect(isBool(new RegExp("6"))).toBeFalsy();
        expect(isBool(new Map())).toBeFalsy();
        expect(isBool(new WeakMap())).toBeFalsy();
        expect(isBool(new Set())).toBeFalsy();
        expect(isBool(new WeakSet())).toBeFalsy();
    });
});
