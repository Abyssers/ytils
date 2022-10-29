import { isAsyncFunction } from "../isAsyncFunction";

describe("isAsyncFunction", () => {
    test("synchronous function", () => {
        expect(isAsyncFunction(console.log)).toBeFalsy();
        expect(
            isAsyncFunction(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncFunction(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncFunction(function* () {
                /* do something */
            })
        ).toBeFalsy();
    });

    test("asynchronous function", () => {
        expect(
            isAsyncFunction(async function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAsyncFunction(async () => {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAsyncFunction(async function* () {
                /* do something */
            })
        ).toBeTruthy();
    });

    test("other types", () => {
        expect(isAsyncFunction(undefined)).toBeFalsy();
        expect(isAsyncFunction(null)).toBeFalsy();
        expect(isAsyncFunction(6)).toBeFalsy();
        expect(isAsyncFunction(new Number(6.6))).toBeFalsy();
        expect(isAsyncFunction("6")).toBeFalsy();
        expect(isAsyncFunction(new String(6.6))).toBeFalsy();
        expect(isAsyncFunction(Symbol(6))).toBeFalsy();
        expect(isAsyncFunction({})).toBeFalsy();
        expect(isAsyncFunction(new Object())).toBeFalsy();
        expect(isAsyncFunction([])).toBeFalsy();
        expect(isAsyncFunction(new Array(6))).toBeFalsy();
        expect(isAsyncFunction(new RegExp("6"))).toBeFalsy();
        expect(isAsyncFunction(new Map())).toBeFalsy();
        expect(isAsyncFunction(new WeakMap())).toBeFalsy();
        expect(isAsyncFunction(new Set())).toBeFalsy();
        expect(isAsyncFunction(new WeakSet())).toBeFalsy();
    });
});
