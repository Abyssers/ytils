import { isArr } from "../isArr";

test("isArr", () => {
    // array
    expect(isArr([])).toBe(true);

    // object of Array
    expect(isArr(new Array(6))).toBe(true);

    // other types
    expect(isArr("6")).toBe(false);
    expect(isArr(6)).toBe(false);
    expect(isArr({})).toBe(false);
});
