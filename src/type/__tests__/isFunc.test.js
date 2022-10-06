import { isFunc } from "../isFunc";

test("isFunc", () => {
    // function
    expect(
        isFunc(function () {
            /* do something */
        })
    ).toBe(true);
    expect(
        isFunc(() => {
            /* do something */
        })
    ).toBe(true);
    expect(isFunc(console.log)).toBe(true);
    expect(isFunc(Number)).toBe(true);

    // other types
    expect(isFunc({})).toBe(false);
    expect(isFunc(111)).toBe(false);
    expect(isFunc("111")).toBe(false);
});
