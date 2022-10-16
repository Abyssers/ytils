import { isAsyncGen } from "../isAsyncGen";

describe("isAsyncGen", () => {
    test("asynchronous generator", () => {
        expect(
            isAsyncGen(
                (async function* () {
                    /* do something */
                })()
            )
        ).toBeTruthy();
    });

    test("synchronous generator", () => {
        expect(
            isAsyncGen(
                (function* () {
                    /* do something */
                })()
            )
        ).toBeFalsy();
    });

    test("other types", () => {
        expect(isAsyncGen(undefined)).toBeFalsy();
        expect(isAsyncGen(null)).toBeFalsy();
        expect(isAsyncGen(6)).toBeFalsy();
        expect(isAsyncGen(new Number(6.6))).toBeFalsy();
        expect(isAsyncGen("6")).toBeFalsy();
        expect(isAsyncGen(new String(6.6))).toBeFalsy();
        expect(isAsyncGen(Symbol(6))).toBeFalsy();
        expect(isAsyncGen({})).toBeFalsy();
        expect(isAsyncGen(new Object())).toBeFalsy();
        expect(isAsyncGen([])).toBeFalsy();
        expect(isAsyncGen(new Array(6))).toBeFalsy();
        expect(isAsyncGen(new RegExp("6"))).toBeFalsy();
        expect(isAsyncGen(new Map())).toBeFalsy();
        expect(isAsyncGen(new WeakMap())).toBeFalsy();
        expect(isAsyncGen(new Set())).toBeFalsy();
        expect(isAsyncGen(new WeakSet())).toBeFalsy();

        expect(isAsyncGen(console.log)).toBeFalsy();
        expect(
            isAsyncGen(
                (function () {
                    /* do something */
                })()
            )
        ).toBeFalsy();
        expect(
            isAsyncGen(
                (() => {
                    /* do something */
                })()
            )
        ).toBeFalsy();
        expect(
            isAsyncGen(
                (async function () {
                    /* do something */
                })()
            )
        ).toBeFalsy();
        expect(
            isAsyncGen(
                (async () => {
                    /* do something */
                })()
            )
        ).toBeFalsy();
    });
});
