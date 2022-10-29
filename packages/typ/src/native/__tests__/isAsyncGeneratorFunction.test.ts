import { isAsyncGeneratorFunction } from "../isAsyncGeneratorFunction";

describe("isAsyncGeneratorFunction", () => {
    test("function", () => {
        expect(
            isAsyncGeneratorFunction(async function* () {
                /* do something */
            })
        ).toBeTruthy();

        expect(isAsyncGeneratorFunction(console.log)).toBeFalsy();
        expect(
            isAsyncGeneratorFunction(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncGeneratorFunction(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncGeneratorFunction(function* () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncGeneratorFunction(async function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isAsyncGeneratorFunction(async () => {
                /* do something */
            })
        ).toBeFalsy();
    });

    test("other types", () => {
        expect(isAsyncGeneratorFunction(undefined)).toBeFalsy();
        expect(isAsyncGeneratorFunction(null)).toBeFalsy();
        expect(isAsyncGeneratorFunction(6)).toBeFalsy();
        expect(isAsyncGeneratorFunction(new Number(6.6))).toBeFalsy();
        expect(isAsyncGeneratorFunction("6")).toBeFalsy();
        expect(isAsyncGeneratorFunction(new String(6.6))).toBeFalsy();
        expect(isAsyncGeneratorFunction(Symbol(6))).toBeFalsy();
        expect(isAsyncGeneratorFunction({})).toBeFalsy();
        expect(isAsyncGeneratorFunction(new Object())).toBeFalsy();
        expect(isAsyncGeneratorFunction([])).toBeFalsy();
        expect(isAsyncGeneratorFunction(new Array(6))).toBeFalsy();
        expect(isAsyncGeneratorFunction(new RegExp("6"))).toBeFalsy();
        expect(isAsyncGeneratorFunction(new Map())).toBeFalsy();
        expect(isAsyncGeneratorFunction(new WeakMap())).toBeFalsy();
        expect(isAsyncGeneratorFunction(new Set())).toBeFalsy();
        expect(isAsyncGeneratorFunction(new WeakSet())).toBeFalsy();
    });
});
