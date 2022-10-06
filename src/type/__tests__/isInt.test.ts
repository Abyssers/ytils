import { isInt } from "../isInt";

test("isInt", () => {
    // integer
    expect(isInt(6)).toBe(true);
    expect(isInt(Number.MAX_SAFE_INTEGER)).toBe(true);

    // object of Integer Number
    expect(isInt(new Number(1))).toBe(true);

    // other types
    expect(isInt("6")).toBe(false);
    expect(isInt(NaN)).toBe(false);
    expect(isInt(new Number(NaN))).toBe(false);
});
