import { isArrBuffer } from "../isArrBuffer";

describe("isArrBuffer", () => {
    test("object of ArrBuffer", () => {
        expect(isArrBuffer(new ArrayBuffer(6))).toBeTruthy;
    });

    test("other types", () => {
        expect(isArrBuffer(undefined)).toBeFalsy;
        expect(isArrBuffer(null)).toBeFalsy;
        expect(isArrBuffer(true)).toBeFalsy;
        expect(isArrBuffer(false)).toBeFalsy;
        expect(isArrBuffer(new Boolean(false))).toBeFalsy;
        expect(isArrBuffer("6")).toBeFalsy;
        expect(isArrBuffer(new String(6))).toBeFalsy;
        expect(isArrBuffer(Symbol(6))).toBeFalsy;
        expect(isArrBuffer({})).toBeFalsy;
        expect(isArrBuffer(new Object())).toBeFalsy;
        expect(isArrBuffer([])).toBeFalsy;
        expect(isArrBuffer(new Array(6))).toBeFalsy;
        expect(isArrBuffer(console.log)).toBeFalsy;
        expect(isArrBuffer(new Date())).toBeFalsy;
        expect(isArrBuffer(new RegExp("6"))).toBeFalsy;
        expect(isArrBuffer(new Map())).toBeFalsy;
        expect(isArrBuffer(new WeakMap())).toBeFalsy;
        expect(isArrBuffer(new Set())).toBeFalsy;
        expect(isArrBuffer(new WeakSet())).toBeFalsy;
    });
});
