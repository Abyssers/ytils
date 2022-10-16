import { isBigInt } from "../isBigInt";

describe("isBigInt", () => {
    test("BigInt literal", () => {
        expect(isBigInt(0n)).toBeTruthy;
        expect(isBigInt(6n)).toBeTruthy;
        expect(isBigInt(-6n)).toBeTruthy;
    });

    test("object of BigInt", () => {
        expect(isBigInt(BigInt(0))).toBeTruthy;
        expect(isBigInt(BigInt(6))).toBeTruthy;
        expect(isBigInt(BigInt(-6))).toBeTruthy;
        expect(isBigInt(Number.MAX_SAFE_INTEGER)).toBeTruthy;
        expect(isBigInt(Number.MIN_SAFE_INTEGER)).toBeTruthy;
        expect(isBigInt(Number.MAX_SAFE_INTEGER + 1)).toBeTruthy;
        expect(isBigInt(Number.MIN_SAFE_INTEGER - 1)).toBeTruthy;
    });

    test("other types", () => {
        expect(isBigInt(undefined)).toBeFalsy;
        expect(isBigInt(null)).toBeFalsy;
        expect(isBigInt(true)).toBeFalsy;
        expect(isBigInt(false)).toBeFalsy;
        expect(isBigInt(new Boolean(false))).toBeFalsy;
        expect(isBigInt("6")).toBeFalsy;
        expect(isBigInt(new String(6))).toBeFalsy;
        expect(isBigInt(Symbol(6))).toBeFalsy;
        expect(isBigInt({})).toBeFalsy;
        expect(isBigInt(new Object())).toBeFalsy;
        expect(isBigInt([])).toBeFalsy;
        expect(isBigInt(new Array(6))).toBeFalsy;
        expect(isBigInt(console.log)).toBeFalsy;
        expect(isBigInt(new Date())).toBeFalsy;
        expect(isBigInt(new RegExp("6"))).toBeFalsy;
        expect(isBigInt(new Map())).toBeFalsy;
        expect(isBigInt(new WeakMap())).toBeFalsy;
        expect(isBigInt(new Set())).toBeFalsy;
        expect(isBigInt(new WeakSet())).toBeFalsy;
    });
});
