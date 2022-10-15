import { isDate } from "../isDate";

describe("isDate", () => {
    test("object of Date", () => {
        expect(isDate(new Date())).toBeTruthy();
        expect(isDate(new Date(6))).toBeTruthy();
        expect(isDate(new Date(20221110))).toBeTruthy();
        expect(isDate(new Date("Thu Nov 10 2022 00:00:00 GMT+0800"))).toBeTruthy();
        expect(isDate(new Date("666"))).toBeTruthy();

        expect(isDate(new Date("20221110"))).toBeFalsy();
        expect(isDate(new Date("1234567"))).toBeFalsy();
    });

    test("other types", () => {
        expect(isDate(undefined)).toBeFalsy();
        expect(isDate(null)).toBeFalsy();
        expect(isDate(true)).toBeFalsy();
        expect(isDate(new Boolean(false))).toBeFalsy();
        expect(isDate(6)).toBeFalsy();
        expect(isDate(new Number(6.6))).toBeFalsy();
        expect(isDate("6")).toBeFalsy();
        expect(isDate(new String(6.6))).toBeFalsy();
        expect(isDate(Symbol(6))).toBeFalsy();
        expect(isDate({})).toBeFalsy();
        expect(isDate(new Object())).toBeFalsy();
        expect(isDate([])).toBeFalsy();
        expect(isDate(new Array(6))).toBeFalsy();
        expect(isDate(console.log)).toBeFalsy();
        expect(isDate(new RegExp("6"))).toBeFalsy();
        expect(isDate(new Map())).toBeFalsy();
        expect(isDate(new WeakMap())).toBeFalsy();
        expect(isDate(new Set())).toBeFalsy();
        expect(isDate(new WeakSet())).toBeFalsy();
    });
});
