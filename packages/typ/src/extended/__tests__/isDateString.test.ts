import { isDateString } from "../isDateString";

describe("isDateString", () => {
    test("string literal", () => {
        expect(isDateString("Thu Nov 10 2022 00:00:00 GMT+0800")).toBeTruthy();
        expect(isDateString("2022 11 10")).toBeTruthy();
        expect(isDateString("2022/11/10")).toBeTruthy();

        expect(isDateString("20221110")).toBeFalsy();
        expect(isDateString("1234567")).toBeFalsy();
    });

    test("object of String", () => {
        expect(isDateString(new String("Thu Nov 10 2022 00:00:00 GMT+0800"))).toBeTruthy();
        expect(isDateString(new String("2022 11 10"))).toBeTruthy();
        expect(isDateString(new String("2022/11/10"))).toBeTruthy();

        expect(isDateString(new String("20221110"))).toBeFalsy();
        expect(isDateString(new String("1234567"))).toBeFalsy();
    });

    test("other types", () => {
        expect(isDateString(undefined)).toBeFalsy();
        expect(isDateString(null)).toBeFalsy();
        expect(isDateString(true)).toBeFalsy();
        expect(isDateString(new Boolean(false))).toBeFalsy();
        expect(isDateString(6)).toBeFalsy();
        expect(isDateString(new Number(6.6))).toBeFalsy();
        expect(isDateString(Symbol(6))).toBeFalsy();
        expect(isDateString({})).toBeFalsy();
        expect(isDateString(new Object())).toBeFalsy();
        expect(isDateString([])).toBeFalsy();
        expect(isDateString(new Array(6))).toBeFalsy();
        expect(isDateString(console.log)).toBeFalsy();
        expect(isDateString(new Date())).toBeFalsy();
        expect(isDateString(new RegExp("6"))).toBeFalsy();
        expect(isDateString(new Map())).toBeFalsy();
        expect(isDateString(new WeakMap())).toBeFalsy();
        expect(isDateString(new Set())).toBeFalsy();
        expect(isDateString(new WeakSet())).toBeFalsy();
    });
});
