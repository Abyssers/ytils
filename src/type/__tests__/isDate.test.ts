import { isDate } from "../isDate";

test("isDate", () => {
    // object of Date
    expect(isDate(new Date(1))).toBe(true);
    expect(isDate(new Date("Mon Sep 26 2022 19:47:34 GMT+0800"))).toBe(true);
    expect(isDate(new Date("666"))).toBe(true);

    // other types
    expect(isDate(new Date(Infinity))).toBe(false);
    expect(isDate(new Date(NaN))).toBe(false);
    expect(isDate({})).toBe(false);
});
