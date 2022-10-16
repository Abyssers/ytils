import { isAsyncGenFunc } from "../isAsyncGenFunc";

describe("isAsyncGenFunc", () => {
    test("asynchronous-generate function", () => {
        expect(
            isAsyncGenFunc(async function* () {
                /* do something */
            })
        ).toBeTruthy();
    });

    test("other function", () => {
        expect(isAsyncGenFunc(console.log)).toBeFalsy();
        expect(
            isAsyncGenFunc(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncGenFunc(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncGenFunc(function* () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncGenFunc(async function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncGenFunc(async () => {
                /* do something */
            })
        ).toBeFalsy();
    });

    test("other types", () => {
        expect(isAsyncGenFunc(undefined)).toBeFalsy();
        expect(isAsyncGenFunc(null)).toBeFalsy();
        expect(isAsyncGenFunc(6)).toBeFalsy();
        expect(isAsyncGenFunc(new Number(6.6))).toBeFalsy();
        expect(isAsyncGenFunc("6")).toBeFalsy();
        expect(isAsyncGenFunc(new String(6.6))).toBeFalsy();
        expect(isAsyncGenFunc(Symbol(6))).toBeFalsy();
        expect(isAsyncGenFunc({})).toBeFalsy();
        expect(isAsyncGenFunc(new Object())).toBeFalsy();
        expect(isAsyncGenFunc([])).toBeFalsy();
        expect(isAsyncGenFunc(new Array(6))).toBeFalsy();
        expect(isAsyncGenFunc(new RegExp("6"))).toBeFalsy();
        expect(isAsyncGenFunc(new Map())).toBeFalsy();
        expect(isAsyncGenFunc(new WeakMap())).toBeFalsy();
        expect(isAsyncGenFunc(new Set())).toBeFalsy();
        expect(isAsyncGenFunc(new WeakSet())).toBeFalsy();
    });
});
