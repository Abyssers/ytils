import { merge } from "../merge";

describe("merge", () => {
    test("object", () => {
        expect(merge({ name: "GarlicGo" }, { name: "Morilence", age: 21 })).toEqual({ name: "Morilence", age: 21 });
        // to be supplemented
    });

    test("other types", () => {
        // to be supplemented
    });
});
