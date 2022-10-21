import { eliminate } from "../eliminate";

describe("eliminate", () => {
    test("object", () => {
        expect(eliminate({ name: "GarlicGo" }, { name: "Morilence", age: 21 })).toEqual({});
        // to be supplemented
    });

    test("other types", () => {
        // to be supplemented
    });
});
