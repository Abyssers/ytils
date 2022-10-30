import { isAsyncGenerator } from "../isAsyncGenerator";

describe("isAsyncGenerator", () => {
    test("asynchronous generator", () => {
        expect(
            isAsyncGenerator(
                (async function* () {
                    /* do something */
                })()
            )
        ).toBeTruthy();
    });

    test("synchronous generator", () => {
        expect(
            isAsyncGenerator(
                (function* () {
                    /* do something */
                })()
            )
        ).toBeFalsy();
    });

    test("other types", () => {
        expect(isAsyncGenerator(undefined)).toBeFalsy();
        expect(isAsyncGenerator(null)).toBeFalsy();
        expect(isAsyncGenerator(6)).toBeFalsy();
        expect(isAsyncGenerator(new Number(6.6))).toBeFalsy();
        expect(isAsyncGenerator("6")).toBeFalsy();
        expect(isAsyncGenerator(new String(6.6))).toBeFalsy();
        expect(isAsyncGenerator(Symbol(6))).toBeFalsy();
        expect(isAsyncGenerator({})).toBeFalsy();
        expect(isAsyncGenerator(new Object())).toBeFalsy();
        expect(isAsyncGenerator([])).toBeFalsy();
        expect(isAsyncGenerator(new Array(6))).toBeFalsy();
        expect(isAsyncGenerator(new RegExp("6"))).toBeFalsy();
        expect(isAsyncGenerator(new Map())).toBeFalsy();
        expect(isAsyncGenerator(new WeakMap())).toBeFalsy();
        expect(isAsyncGenerator(new Set())).toBeFalsy();
        expect(isAsyncGenerator(new WeakSet())).toBeFalsy();

        expect(isAsyncGenerator(console.log)).toBeFalsy();
        expect(
            isAsyncGenerator(
                (function () {
                    /* do something */
                })()
            )
        ).toBeFalsy();
        expect(
            isAsyncGenerator(
                (() => {
                    /* do something */
                })()
            )
        ).toBeFalsy();
        expect(
            isAsyncGenerator(
                (async function () {
                    /* do something */
                })()
            )
        ).toBeFalsy();
        expect(
            isAsyncGenerator(
                (async () => {
                    /* do something */
                })()
            )
        ).toBeFalsy();
    });
});
