import { isArrayBuffer } from "../isArrayBuffer";

describe("isArrayBuffer", () => {
    test("object of ArrayBuffer", () => {
        expect(isArrayBuffer(new ArrayBuffer(6))).toBeTruthy();
    });

    test("other types", () => {
        expect(isArrayBuffer(undefined)).toBeFalsy();
        expect(isArrayBuffer(null)).toBeFalsy();
        expect(isArrayBuffer(true)).toBeFalsy();
        expect(isArrayBuffer(false)).toBeFalsy();
        expect(isArrayBuffer(new Boolean(false))).toBeFalsy();
        expect(isArrayBuffer("6")).toBeFalsy();
        expect(isArrayBuffer(new String(6))).toBeFalsy();
        expect(isArrayBuffer(Symbol(6))).toBeFalsy();
        expect(isArrayBuffer({})).toBeFalsy();
        expect(isArrayBuffer(new Object())).toBeFalsy();
        expect(isArrayBuffer([])).toBeFalsy();
        expect(isArrayBuffer(new Array(6))).toBeFalsy();
        expect(isArrayBuffer(console.log)).toBeFalsy();
        expect(isArrayBuffer(new Date())).toBeFalsy();
        expect(isArrayBuffer(new RegExp("6"))).toBeFalsy();
        expect(isArrayBuffer(new Map())).toBeFalsy();
        expect(isArrayBuffer(new WeakMap())).toBeFalsy();
        expect(isArrayBuffer(new Set())).toBeFalsy();
        expect(isArrayBuffer(new WeakSet())).toBeFalsy();
    });
});
