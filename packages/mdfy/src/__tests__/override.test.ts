import { override } from "../override";

describe("override", () => {
    test("object", () => {
        expect(override({ name: "GarlicGo" }, { name: "Morilence", age: 21 })).toEqual({ name: "Morilence" });
        // to be supplemented
    });

    test("other types", () => {
        // to be supplemented
    });
});
