import { isFunction } from "../isFunction";

describe("isFunction", () => {
    test("synchronous function", () => {
        expect(isFunction(console.log)).toBeTruthy();
        expect(
            isFunction(function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isFunction(() => {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isFunction(function* () {
                /* do something */
            })
        ).toBeTruthy();
    });

    test("asynchronous function", () => {
        expect(
            isFunction(async function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isFunction(async () => {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isFunction(async function* () {
                /* do something */
            })
        ).toBeTruthy();
    });

    test("other types", () => {
        expect(isFunction(undefined)).toBeFalsy();
        expect(isFunction(null)).toBeFalsy();
        expect(isFunction(6)).toBeFalsy();
        expect(isFunction(new Number(6.6))).toBeFalsy();
        expect(isFunction("6")).toBeFalsy();
        expect(isFunction(new String(6.6))).toBeFalsy();
        expect(isFunction(Symbol(6))).toBeFalsy();
        expect(isFunction({})).toBeFalsy();
        expect(isFunction(new Object())).toBeFalsy();
        expect(isFunction([])).toBeFalsy();
        expect(isFunction(new Array(6))).toBeFalsy();
        expect(isFunction(new RegExp("6"))).toBeFalsy();
        expect(isFunction(new Map())).toBeFalsy();
        expect(isFunction(new WeakMap())).toBeFalsy();
        expect(isFunction(new Set())).toBeFalsy();
        expect(isFunction(new WeakSet())).toBeFalsy();
    });
});
