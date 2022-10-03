import { isTypedArr } from "../isTypedArr";

describe("isTypedArr", () => {
    test("object of a kind of TypedArray", () => {
        expect(isTypedArr(new Float32Array())).toBeTruthy();
        expect(isTypedArr(new Float64Array())).toBeTruthy();
        expect(isTypedArr(new Int16Array())).toBeTruthy();
        expect(isTypedArr(new Int32Array())).toBeTruthy();
        expect(isTypedArr(new Int8Array())).toBeTruthy();
        expect(isTypedArr(new Uint16Array())).toBeTruthy();
        expect(isTypedArr(new Uint32Array())).toBeTruthy();
        expect(isTypedArr(new Uint8Array())).toBeTruthy();
        expect(isTypedArr(new Uint8ClampedArray())).toBeTruthy();
    });

    test("other types", () => {
        expect(isTypedArr(undefined)).toBeFalsy();
        expect(isTypedArr(null)).toBeFalsy();
        expect(isTypedArr(true)).toBeFalsy();
        expect(isTypedArr(new Boolean(false))).toBeFalsy();
        expect(isTypedArr(6)).toBeFalsy();
        expect(isTypedArr(new Number(6))).toBeFalsy();
        expect(isTypedArr("6")).toBeFalsy();
        expect(isTypedArr(new String(6))).toBeFalsy();
        expect(isTypedArr(Symbol(6))).toBeFalsy();
        expect(isTypedArr({})).toBeFalsy();
        expect(isTypedArr(new Object())).toBeFalsy();
        expect(isTypedArr([])).toBeFalsy();
        expect(isTypedArr(new Array(6))).toBeFalsy();
        expect(isTypedArr(new BigInt64Array())).toBeFalsy();
        expect(isTypedArr(new BigUint64Array())).toBeFalsy();
        expect(isTypedArr(console.log)).toBeFalsy();
        expect(isTypedArr(new Date())).toBeFalsy();
        expect(isTypedArr(new RegExp("6"))).toBeFalsy();
        expect(isTypedArr(new Map())).toBeFalsy();
        expect(isTypedArr(new WeakMap())).toBeFalsy();
        expect(isTypedArr(new Set())).toBeFalsy();
        expect(isTypedArr(new WeakSet())).toBeFalsy();
    });
});
