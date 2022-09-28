import { isDateStr } from "../isDateStr";

test("isDateStr", () => {
    // date-string
    expect(isDateStr("Thu Nov 10 2022 00:00:00 GMT+0800")).toBe(true);
    expect(isDateStr("2022 11 10")).toBe(true);
    expect(isDateStr("2022/11/10")).toBe(true);

    // object of String
    expect(isDateStr("20221110")).toBe(false);
    expect(isDateStr("1234567")).toBe(false);
});
