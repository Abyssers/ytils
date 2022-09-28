import { isAsyncFunc } from "../isAsyncFunc";

test("isAsyncFunc", () => {
    // asynchronous function
    expect(
        isAsyncFunc(async () => {
            /* do something */
        })
    ).toBe(true);

    // synchronous function
    expect(
        isAsyncFunc(() => {
            /* do something */
        })
    ).toBe(false);

    //other types
    expect(isAsyncFunc(1)).toBe(false);
});
