import { isPlainObj } from "../isPlainObj";

describe("isPlainObj", () => {
    test("plain object", () => {
        expect(isPlainObj({})).toBeTruthy();
        expect(isPlainObj(Object.create({}))).toBeTruthy();
        expect(isPlainObj(Object.create(null))).toBeTruthy();
        expect(isPlainObj(new Object())).toBeTruthy();
    });

    test("other types", () => {
        expect(isPlainObj(new Number(6))).toBeFalsy();
        expect(isPlainObj(new Number(Infinity))).toBeFalsy();
        expect(isPlainObj(new Number(NaN))).toBeFalsy();
        expect(isPlainObj(new Boolean(false))).toBeFalsy();
        expect(isPlainObj(new String(6))).toBeFalsy();
        expect(isPlainObj([])).toBeFalsy();
        expect(isPlainObj(new ArrayBuffer(8))).toBeFalsy();
        expect(isPlainObj(new Array(6))).toBeFalsy();
        expect(isPlainObj(console.log)).toBeFalsy();
        expect(
            isPlainObj(
                new (class A {
                    constructor() {
                        /* do something */
                    }
                })()
            )
        ).toBeFalsy();
        expect(
            isPlainObj(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isPlainObj(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isPlainObj(async function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isPlainObj(async function* () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isPlainObj(async () => {
                /* do something */
            })
        ).toBeFalsy();
        expect(isPlainObj(new Date())).toBeFalsy();
        expect(isPlainObj(new RegExp("6"))).toBeFalsy();
        expect(isPlainObj(new Map())).toBeFalsy();
        expect(isPlainObj(new WeakMap())).toBeFalsy();
        expect(isPlainObj(new Set())).toBeFalsy();
        expect(isPlainObj(new WeakSet())).toBeFalsy();
        expect(isPlainObj(6)).toBeFalsy();
        expect(isPlainObj(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isPlainObj(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isPlainObj(BigInt(0b11111111111111111111111111111111111111111111111111111))).toBeFalsy();
        expect(isPlainObj(Infinity)).toBeFalsy();
        expect(isPlainObj(NaN)).toBeFalsy();
        expect(isPlainObj(undefined)).toBeFalsy();
        expect(isPlainObj(null)).toBeFalsy();
        expect(isPlainObj("6")).toBeFalsy();
        expect(isPlainObj(true)).toBeFalsy();
        expect(isPlainObj(Symbol(6))).toBeFalsy();
    });
});
