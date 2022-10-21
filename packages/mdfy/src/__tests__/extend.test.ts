import { extend } from "../extend";

describe("extend", () => {
    test("object", () => {
        expect(extend({ name: "GarlicGo" }, { name: "Morilence", age: 21 })).toEqual({ name: "GarlicGo", age: 21 });
        // to be supplemented
    });

    test("other types", () => {
        // to be supplemented
    });
});
