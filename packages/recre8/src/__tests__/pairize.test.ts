import { pairize } from "../pairize";

describe("pairize", () => {
    test("array", () => {
        expect(pairize([])).toEqual([]);
        expect(pairize([1, 2, 3])).toEqual([1, [2, 3]]);
    });

    test("set", () => {
        expect(pairize(new Set([1, 2, 3]))).toEqual([
            [1, 1],
            [2, 2],
            [3, 3],
        ]);
    });

    test("map", () => {
        expect(
            pairize(
                new Map([
                    ["a", 1],
                    ["b", 2],
                    ["c", 3],
                ])
            )
        ).toEqual([
            ["a", 1],
            ["b", 2],
            ["c", 3],
        ]);
    });

    test("object", () => {
        expect(pairize({ a: 1, b: 2, c: 3 })).toEqual([
            ["a", 1],
            ["b", 2],
            ["c", 3],
        ]);
        expect(pairize(new Boolean(false) as unknown as any[])).toEqual([]);
        expect(pairize(new Number(6.6) as unknown as any[])).toEqual([]);
        expect(pairize(new String(6.6) as unknown as any[])).toEqual([
            ["0", "6"],
            ["1", "."],
            ["2", "6"],
        ]);
        expect(pairize(new Date() as unknown as any[])).toEqual([]);
        expect(pairize(new RegExp("6") as unknown as any[])).toEqual([]);
        expect(pairize(new WeakMap() as unknown as any[])).toEqual([]);
        expect(pairize(new WeakSet() as unknown as any[])).toEqual([]);
    });

    test("other types", () => {
        expect(pairize(undefined as unknown as any[])).toEqual([]);
        expect(pairize(null as unknown as any[])).toEqual([]);
        expect(pairize(true as unknown as any[])).toEqual([]);
        expect(pairize(6 as unknown as any[])).toEqual([]);
        expect(pairize("6" as unknown as any[])).toEqual([]);
        expect(pairize(Symbol(6) as unknown as any[])).toEqual([]);
        expect(pairize(console.log as unknown as any[])).toEqual([]);
    });
});
