import { isPlainObject } from "../isPlainObject";

describe("isPlainObject", () => {
    test("plain object", () => {
        expect(isPlainObject({})).toBeTruthy();
        expect(isPlainObject(Object.create({}))).toBeTruthy();
        expect(isPlainObject(Object.create(null))).toBeTruthy();
        expect(isPlainObject(new Object())).toBeTruthy();
    });

    test("other types", () => {
        expect(isPlainObject(new Number(6))).toBeFalsy();
        expect(isPlainObject(new Number(Infinity))).toBeFalsy();
        expect(isPlainObject(new Number(NaN))).toBeFalsy();
        expect(isPlainObject(new Boolean(false))).toBeFalsy();
        expect(isPlainObject(new String(6))).toBeFalsy();
        expect(isPlainObject([])).toBeFalsy();
        expect(isPlainObject(new ArrayBuffer(8))).toBeFalsy();
        expect(isPlainObject(new Array(6))).toBeFalsy();
        expect(isPlainObject(console.log)).toBeFalsy();
        expect(
            isPlainObject(
                new (class A {
                    constructor() {
                        /* do something */
                    }
                })()
            )
        ).toBeFalsy();
        expect(
            isPlainObject(function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isPlainObject(() => {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isPlainObject(async function () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isPlainObject(async function* () {
                /* do something */
            })
        ).toBeFalsy();
        expect(
            isPlainObject(async () => {
                /* do something */
            })
        ).toBeFalsy();
        expect(isPlainObject(new Date())).toBeFalsy();
        expect(isPlainObject(new RegExp("6"))).toBeFalsy();
        expect(isPlainObject(new Map())).toBeFalsy();
        expect(isPlainObject(new WeakMap())).toBeFalsy();
        expect(isPlainObject(new Set())).toBeFalsy();
        expect(isPlainObject(new WeakSet())).toBeFalsy();
        expect(isPlainObject(6)).toBeFalsy();
        expect(isPlainObject(Number.MIN_SAFE_INTEGER)).toBeFalsy();
        expect(isPlainObject(Number.MAX_SAFE_INTEGER)).toBeFalsy();
        expect(isPlainObject(BigInt(0b11111111111111111111111111111111111111111111111111111))).toBeFalsy();
        expect(isPlainObject(Infinity)).toBeFalsy();
        expect(isPlainObject(NaN)).toBeFalsy();
        expect(isPlainObject(undefined)).toBeFalsy();
        expect(isPlainObject(null)).toBeFalsy();
        expect(isPlainObject("6")).toBeFalsy();
        expect(isPlainObject(true)).toBeFalsy();
        expect(isPlainObject(Symbol(6))).toBeFalsy();
    });
});
