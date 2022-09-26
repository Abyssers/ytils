import { isNum } from "../isNum";

test("isNum", () => {
    // number
    expect(isNum(6)).toBe(true);
    expect(isNum(6.6)).toBe(true);
    expect(isNum(Infinity)).toBe(true);
    expect(isNum(NaN)).toBe(false);

    // object of Number
    expect(isNum(new Number(6))).toBe(true);
    expect(isNum(new Number(6.6))).toBe(true);
    expect(isNum(new Number(Infinity))).toBe(true);
    expect(isNum(new Number(NaN))).toBe(false);

    // other types
    expect(isNum(undefined)).toBe(false);
    expect(isNum(null)).toBe(false);
    expect(isNum(true)).toBe(false);
    expect(isNum(new Boolean(false))).toBe(false);
    expect(isNum("6")).toBe(false);
    expect(isNum(new String(6))).toBe(false);
    expect(isNum(Symbol(6))).toBe(false);
    expect(isNum({})).toBe(false);
    expect(isNum(new Object())).toBe(false);
    expect(isNum([])).toBe(false);
    expect(isNum(new Array(6))).toBe(false);
    expect(isNum(console.log)).toBe(false);
    expect(isNum(new Date())).toBe(false);
    expect(isNum(new RegExp("6"))).toBe(false);
    expect(isNum(new Map())).toBe(false);
    expect(isNum(new WeakMap())).toBe(false);
    expect(isNum(new Set())).toBe(false);
    expect(isNum(new WeakSet())).toBe(false);
});
