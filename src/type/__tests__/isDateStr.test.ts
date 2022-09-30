import { isDateStr } from "../isDateStr";

describe("isDateStr", () => {
    test("string literal", () => {
        expect(isDateStr("Thu Nov 10 2022 00:00:00 GMT+0800")).toBeTruthy();
        expect(isDateStr("2022 11 10")).toBeTruthy();
        expect(isDateStr("2022/11/10")).toBeTruthy();

        expect(isDateStr("20221110")).toBeFalsy();
        expect(isDateStr("1234567")).toBeFalsy();
    });

    test("object of String", () => {
        expect(isDateStr(new String("Thu Nov 10 2022 00:00:00 GMT+0800"))).toBeTruthy();
        expect(isDateStr(new String("2022 11 10"))).toBeTruthy();
        expect(isDateStr(new String("2022/11/10"))).toBeTruthy();

        expect(isDateStr(new String("20221110"))).toBeFalsy();
        expect(isDateStr(new String("1234567"))).toBeFalsy();
    });

    test("other types", () => {
        expect(isDateStr(undefined)).toBeFalsy();
        expect(isDateStr(null)).toBeFalsy();
        expect(isDateStr(true)).toBeFalsy();
        expect(isDateStr(new Boolean(false))).toBeFalsy();
        expect(isDateStr(6)).toBeFalsy();
        expect(isDateStr(new Number(6.6))).toBeFalsy();
        expect(isDateStr(Symbol(6))).toBeFalsy();
        expect(isDateStr({})).toBeFalsy();
        expect(isDateStr(new Object())).toBeFalsy();
        expect(isDateStr([])).toBeFalsy();
        expect(isDateStr(new Array(6))).toBeFalsy();
        expect(isDateStr(console.log)).toBeFalsy();
        expect(isDateStr(new Date())).toBeFalsy();
        expect(isDateStr(new RegExp("6"))).toBeFalsy();
        expect(isDateStr(new Map())).toBeFalsy();
        expect(isDateStr(new WeakMap())).toBeFalsy();
        expect(isDateStr(new Set())).toBeFalsy();
        expect(isDateStr(new WeakSet())).toBeFalsy();
    });
});
