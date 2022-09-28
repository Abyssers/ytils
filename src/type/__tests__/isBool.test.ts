import { isBool } from "../isBool";

test("isBool", () => {
    // boolean
    expect(isBool(true)).toBe(true);
    expect(isBool(false)).toBe(true);

    // object of Boolean
    expect(isBool(new Boolean(true))).toBe(true);

    // other types
    expect(isBool("6")).toBe(false);
    expect(isBool(NaN)).toBe(false);
});
