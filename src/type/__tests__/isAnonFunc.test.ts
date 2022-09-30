import { isAnonFunc } from "../isAnonFunc";

describe("isAnonFunc", () => {
    test("synchronous function", () => {
        expect(
            isAnonFunc(function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAnonFunc(() => {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAnonFunc(function* () {
                /* do something */
            })
        ).toBeTruthy();

        expect(isAnonFunc(console.log)).toBeFalsy();
        expect(isAnonFunc(Math.random)).toBeFalsy();
        expect(isAnonFunc(Number.parseInt)).toBeFalsy();
    });

    test("asynchronous function", () => {
        expect(
            isAnonFunc(async function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAnonFunc(async () => {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAnonFunc(async function* () {
                /* do something */
            })
        ).toBeTruthy();
    });

    test("other types", () => {
        expect(isAnonFunc(undefined)).toBeFalsy();
        expect(isAnonFunc(null)).toBeFalsy();
        expect(isAnonFunc(6)).toBeFalsy();
        expect(isAnonFunc(new Number(6.6))).toBeFalsy();
        expect(isAnonFunc("6")).toBeFalsy();
        expect(isAnonFunc(new String(6.6))).toBeFalsy();
        expect(isAnonFunc(Symbol(6))).toBeFalsy();
        expect(isAnonFunc({})).toBeFalsy();
        expect(isAnonFunc(new Object())).toBeFalsy();
        expect(isAnonFunc([])).toBeFalsy();
        expect(isAnonFunc(new Array(6))).toBeFalsy();
        expect(isAnonFunc(new RegExp("6"))).toBeFalsy();
        expect(isAnonFunc(new Map())).toBeFalsy();
        expect(isAnonFunc(new WeakMap())).toBeFalsy();
        expect(isAnonFunc(new Set())).toBeFalsy();
        expect(isAnonFunc(new WeakSet())).toBeFalsy();
    });
});
