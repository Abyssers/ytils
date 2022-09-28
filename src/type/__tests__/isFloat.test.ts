import { isFloat } from "../isFloat";

test("isFloat", () => {
    // float
    expect(isFloat(6.66)).toBe(true);

    // floating-point Number object
    expect(isFloat(new Number(6.66))).toBe(true);

    // other types
    expect(isFloat(Number.MAX_SAFE_INTEGER)).toBe(false);
    expect(isFloat(Infinity)).toBe(false);
    expect(isFloat(6)).toBe(false);
    expect(isFloat(NaN)).toBe(false);
    expect(isFloat(new Number(NaN))).toBe(false);
});
