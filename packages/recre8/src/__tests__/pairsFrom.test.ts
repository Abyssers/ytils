import { pairsFrom } from "../pairsFrom";

describe("pairsFrom", () => {
    test("array", () => {
        expect(pairsFrom([])).toEqual([]);
        expect(pairsFrom([1, 2, 3])).toEqual([1, [2, 3]]);
    });

    test("set", () => {
        expect(pairsFrom(new Set([1, 2, 3]))).toEqual([
            [1, 1],
            [2, 2],
            [3, 3],
        ]);
    });

    test("map", () => {
        expect(
            pairsFrom(
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
        expect(pairsFrom({ a: 1, b: 2, c: 3 })).toEqual([
            ["a", 1],
            ["b", 2],
            ["c", 3],
        ]);
        expect(pairsFrom(new Boolean(false) as unknown as any[])).toEqual([]);
        expect(pairsFrom(new Number(6.6) as unknown as any[])).toEqual([]);
        expect(pairsFrom(new String(6.6) as unknown as any[])).toEqual([
            ["0", "6"],
            ["1", "."],
            ["2", "6"],
        ]);
        expect(pairsFrom(new Date() as unknown as any[])).toEqual([]);
        expect(pairsFrom(new RegExp("6") as unknown as any[])).toEqual([]);
        expect(pairsFrom(new WeakMap() as unknown as any[])).toEqual([]);
        expect(pairsFrom(new WeakSet() as unknown as any[])).toEqual([]);
    });

    test("other types", () => {
        expect(pairsFrom(undefined as unknown as any[])).toEqual([]);
        expect(pairsFrom(null as unknown as any[])).toEqual([]);
        expect(pairsFrom(true as unknown as any[])).toEqual([]);
        expect(pairsFrom(6 as unknown as any[])).toEqual([]);
        expect(pairsFrom("6" as unknown as any[])).toEqual([]);
        expect(pairsFrom(Symbol(6) as unknown as any[])).toEqual([]);
        expect(pairsFrom(console.log as unknown as any[])).toEqual([]);
    });
});
