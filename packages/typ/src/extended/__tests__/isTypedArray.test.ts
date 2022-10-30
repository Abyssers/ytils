import { isTypedArray } from "../isTypedArray";

describe("isTypedArray", () => {
    test("object of a kind of TypedArray", () => {
        expect(isTypedArray(new BigInt64Array())).toBeTruthy();
        expect(isTypedArray(new BigUint64Array())).toBeTruthy();
        expect(isTypedArray(new Float32Array())).toBeTruthy();
        expect(isTypedArray(new Float64Array())).toBeTruthy();
        expect(isTypedArray(new Int16Array())).toBeTruthy();
        expect(isTypedArray(new Int32Array())).toBeTruthy();
        expect(isTypedArray(new Int8Array())).toBeTruthy();
        expect(isTypedArray(new Uint16Array())).toBeTruthy();
        expect(isTypedArray(new Uint32Array())).toBeTruthy();
        expect(isTypedArray(new Uint8Array())).toBeTruthy();
        expect(isTypedArray(new Uint8ClampedArray())).toBeTruthy();
    });

    test("other types", () => {
        expect(isTypedArray(undefined)).toBeFalsy();
        expect(isTypedArray(null)).toBeFalsy();
        expect(isTypedArray(true)).toBeFalsy();
        expect(isTypedArray(new Boolean(false))).toBeFalsy();
        expect(isTypedArray(6)).toBeFalsy();
        expect(isTypedArray(new Number(6))).toBeFalsy();
        expect(isTypedArray("6")).toBeFalsy();
        expect(isTypedArray(new String(6))).toBeFalsy();
        expect(isTypedArray(Symbol(6))).toBeFalsy();
        expect(isTypedArray({})).toBeFalsy();
        expect(isTypedArray(new Object())).toBeFalsy();
        expect(isTypedArray([])).toBeFalsy();
        expect(isTypedArray(new Array(6))).toBeFalsy();
        expect(isTypedArray(console.log)).toBeFalsy();
        expect(isTypedArray(new Date())).toBeFalsy();
        expect(isTypedArray(new RegExp("6"))).toBeFalsy();
        expect(isTypedArray(new Map())).toBeFalsy();
        expect(isTypedArray(new WeakMap())).toBeFalsy();
        expect(isTypedArray(new Set())).toBeFalsy();
        expect(isTypedArray(new WeakSet())).toBeFalsy();
    });
});
