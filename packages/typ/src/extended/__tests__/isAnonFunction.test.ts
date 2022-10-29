import { isAnonFunction } from "../isAnonFunction";

describe("isAnonFunction", () => {
    test("synchronous function", () => {
        expect(
            isAnonFunction(function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAnonFunction(() => {
                /* do something */
            })
        ).toBeTruthy();

        expect(isAnonFunction(console.log)).toBeFalsy();
        expect(isAnonFunction(Math.random)).toBeFalsy();
        expect(isAnonFunction(Number.parseInt)).toBeFalsy();
    });

    test("asynchronous function", () => {
        expect(
            isAnonFunction(async function () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAnonFunction(async () => {
                /* do something */
            })
        ).toBeTruthy();
    });

    test("generator function", () => {
        expect(
            isAnonFunction(function* () {
                /* do something */
            })
        ).toBeTruthy();
        expect(
            isAnonFunction(async function* () {
                /* do something */
            })
        ).toBeTruthy();
    });

    test("other types", () => {
        expect(isAnonFunction(undefined)).toBeFalsy();
        expect(isAnonFunction(null)).toBeFalsy();
        expect(isAnonFunction(6)).toBeFalsy();
        expect(isAnonFunction(new Number(6.6))).toBeFalsy();
        expect(isAnonFunction("6")).toBeFalsy();
        expect(isAnonFunction(new String(6.6))).toBeFalsy();
        expect(isAnonFunction(Symbol(6))).toBeFalsy();
        expect(isAnonFunction({})).toBeFalsy();
        expect(isAnonFunction(new Object())).toBeFalsy();
        expect(isAnonFunction([])).toBeFalsy();
        expect(isAnonFunction(new Array(6))).toBeFalsy();
        expect(isAnonFunction(new RegExp("6"))).toBeFalsy();
        expect(isAnonFunction(new Map())).toBeFalsy();
        expect(isAnonFunction(new WeakMap())).toBeFalsy();
        expect(isAnonFunction(new Set())).toBeFalsy();
        expect(isAnonFunction(new WeakSet())).toBeFalsy();
    });
});
