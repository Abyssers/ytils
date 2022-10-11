import { wordsOf } from "../wordsOf";

describe("wordsOf", () => {
    test("string literal", () => {
        // default
        expect(wordsOf("GarlicGo likes to eat garlic")).toEqual(["GarlicGo", "likes", "to", "eat", "garlic"]);
        // specify a pattern
        expect(wordsOf("GarlicGo likes to eat garlic", /[a-z]+/gmu)).toEqual([
            "arlic",
            "o",
            "likes",
            "to",
            "eat",
            "garlic",
        ]);
        // specify a lexicon
        expect(wordsOf("GarlicGo likes to eat garlic", ["GarlicGo", "garlic"])).toEqual(["GarlicGo", "garlic"]);
        expect(wordsOf("GarlicGo likes to eat garlic", ["likes", "eat"])).toEqual(["likes", "eat"]);
        expect(wordsOf("GarlicGo likes to eat garlic", ["likes", "eat", 666 as unknown as string])).toEqual([
            "likes",
            "eat",
        ]);
        expect(wordsOf("GarlicGo likes to eat garlic", [])).toEqual([]);
        // specify a character set
        expect(wordsOf("GarlicGo likes to eat garlic", "acgilor")).toEqual(["GarlicGo", "li", "o", "a", "garlic"]);
        expect(wordsOf("GarlicGo likes to eat garlic", "accgiloorr")).toEqual(["GarlicGo", "li", "o", "a", "garlic"]);
        expect(wordsOf("GarlicGo likes to eat garlic", "  accg iloo  rr")).toEqual([
            "GarlicGo",
            "li",
            "o",
            "a",
            "garlic",
        ]);
        expect(wordsOf("-?^${}() }(+|[ *. eat {(\\)[", ".*+-?^${}()|[]\\")).toEqual([
            "-?^${}()",
            "}(+|[",
            "*.",
            "{(\\)[",
        ]);
        // unrecognizable lcp
        expect(wordsOf("GarlicGo likes to eat garlic", 6 as unknown as string)).toEqual([]);
        expect(wordsOf("GarlicGo likes to eat garlic", true as unknown as string)).toEqual([]);
        expect(wordsOf("GarlicGo likes to eat garlic", null as unknown as string)).toEqual([]);
        expect(wordsOf("GarlicGo likes to eat garlic", {} as unknown as string)).toEqual([]);
    });

    test("other types", () => {
        expect(wordsOf(undefined as unknown as string)).toEqual([]);
        expect(wordsOf(null as unknown as string)).toEqual([]);
        expect(wordsOf(true as unknown as string)).toEqual([]);
        expect(wordsOf(new Boolean(false) as unknown as string)).toEqual([]);
        expect(wordsOf(6 as unknown as string)).toEqual([]);
        expect(wordsOf(new Number(6.6) as unknown as string)).toEqual([]);
        expect(wordsOf(Symbol(6) as unknown as string)).toEqual([]);
        expect(wordsOf({} as unknown as string)).toEqual([]);
        expect(wordsOf(new Object() as unknown as string)).toEqual([]);
        expect(wordsOf([] as unknown as string)).toEqual([]);
        expect(wordsOf(new Array(6) as unknown as string)).toEqual([]);
        expect(wordsOf(console.log as unknown as string)).toEqual([]);
        expect(wordsOf(new Date() as unknown as string)).toEqual([]);
        expect(wordsOf(new RegExp("6") as unknown as string)).toEqual([]);
        expect(wordsOf(new Map() as unknown as string)).toEqual([]);
        expect(wordsOf(new WeakMap() as unknown as string)).toEqual([]);
        expect(wordsOf(new Set() as unknown as string)).toEqual([]);
        expect(wordsOf(new WeakSet() as unknown as string)).toEqual([]);
    });
});
