import { isFunc } from "../isFunc";

describe("isFunc", () => {
    test("synchronous function", () => {
        expect(isFunc(console.log)).toBeTruthy();
        expect(
            isFunc(function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isFunc(() => {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isFunc(function* () {
                /* do something */
            })
        ).toBeTruthy();
    });

    test("asynchronous function", () => {
        expect(
            isFunc(async function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isFunc(async () => {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isFunc(async function* () {
                /* do something */
            })
        ).toBeTruthy();
    });

    test("other types", () => {
        expect(isFunc(undefined)).toBeFalsy();
        expect(isFunc(null)).toBeFalsy();
        expect(isFunc(6)).toBeFalsy();
        expect(isFunc(new Number(6.6))).toBeFalsy();
        expect(isFunc("6")).toBeFalsy();
        expect(isFunc(new String(6.6))).toBeFalsy();
        expect(isFunc(Symbol(6))).toBeFalsy();
        expect(isFunc({})).toBeFalsy();
        expect(isFunc(new Object())).toBeFalsy();
        expect(isFunc([])).toBeFalsy();
        expect(isFunc(new Array(6))).toBeFalsy();
        expect(isFunc(new RegExp("6"))).toBeFalsy();
        expect(isFunc(new Map())).toBeFalsy();
        expect(isFunc(new WeakMap())).toBeFalsy();
        expect(isFunc(new Set())).toBeFalsy();
        expect(isFunc(new WeakSet())).toBeFalsy();
    });
});
