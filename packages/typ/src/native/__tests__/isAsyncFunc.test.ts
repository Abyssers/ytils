import { isAsyncFunc } from "../isAsyncFunc";

describe("isAsyncFunc", () => {
    test("synchronous function", () => {
        expect(isAsyncFunc(console.log)).toBeFalsy();
        expect(
            isAsyncFunc(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncFunc(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncFunc(function* () {
                /* do something */
            })
        ).toBeFalsy();
    });

    test("asynchronous function", () => {
        expect(
            isAsyncFunc(async function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAsyncFunc(async () => {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAsyncFunc(async function* () {
                /* do something */
            })
        ).toBeTruthy();
    });

    test("other types", () => {
        expect(isAsyncFunc(undefined)).toBeFalsy();
        expect(isAsyncFunc(null)).toBeFalsy();
        expect(isAsyncFunc(6)).toBeFalsy();
        expect(isAsyncFunc(new Number(6.6))).toBeFalsy();
        expect(isAsyncFunc("6")).toBeFalsy();
        expect(isAsyncFunc(new String(6.6))).toBeFalsy();
        expect(isAsyncFunc(Symbol(6))).toBeFalsy();
        expect(isAsyncFunc({})).toBeFalsy();
        expect(isAsyncFunc(new Object())).toBeFalsy();
        expect(isAsyncFunc([])).toBeFalsy();
        expect(isAsyncFunc(new Array(6))).toBeFalsy();
        expect(isAsyncFunc(new RegExp("6"))).toBeFalsy();
        expect(isAsyncFunc(new Map())).toBeFalsy();
        expect(isAsyncFunc(new WeakMap())).toBeFalsy();
        expect(isAsyncFunc(new Set())).toBeFalsy();
        expect(isAsyncFunc(new WeakSet())).toBeFalsy();
    });
});
