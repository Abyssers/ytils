import { isArrLike } from "../isArrLike";

test("isArrLike", () => {
    // array like
    expect(isArrLike([])).toBe(true);
    expect(isArrLike(new Array(6))).toBe(true);
    expect(isArrLike("6")).toBe(true);

    // other types
    expect(isArrLike({})).toBe(false);
    expect(isArrLike(6)).toBe(false);
});
