import { words } from "../words";

describe("words", () => {
    test("string literal", () => {
        // default
        expect(words("GarlicGo likes to eat garlic")).toEqual(["GarlicGo", "likes", "to", "eat", "garlic"]);
        // specify a pattern
        expect(words("GarlicGo likes to eat garlic", /[a-z]+/gmu)).toEqual([
            "arlic",
            "o",
            "likes",
            "to",
            "eat",
            "garlic",
        ]);
        // specify a lexicon
        expect(words("GarlicGo likes to eat garlic", ["GarlicGo", "garlic"])).toEqual(["GarlicGo", "garlic"]);
        expect(words("GarlicGo likes to eat garlic", ["likes", "eat"])).toEqual(["likes", "eat"]);
        expect(words("GarlicGo likes to eat garlic", ["likes", "eat", 666 as unknown as string])).toEqual([
            "likes",
            "eat",
        ]);
        expect(words("GarlicGo likes to eat garlic", [])).toEqual([]);
        // specify a character set
        expect(words("GarlicGo likes to eat garlic", "acgilor")).toEqual(["GarlicGo", "li", "o", "a", "garlic"]);
        expect(words("GarlicGo likes to eat garlic", "accgiloorr")).toEqual(["GarlicGo", "li", "o", "a", "garlic"]);
        expect(words("GarlicGo likes to eat garlic", "  accg iloo  rr")).toEqual([
            "GarlicGo",
            "li",
            "o",
            "a",
            "garlic",
        ]);
        expect(words("-?^${}() }(+|[ *. eat {(\\)[", ".*+-?^${}()|[]\\")).toEqual([
            "-?^${}()",
            "}(+|[",
            "*.",
            "{(\\)[",
        ]);
        // unrecognizable lcp
        expect(words("GarlicGo likes to eat garlic", 6 as unknown as string)).toEqual([]);
        expect(words("GarlicGo likes to eat garlic", true as unknown as string)).toEqual([]);
        expect(words("GarlicGo likes to eat garlic", null as unknown as string)).toEqual([]);
        expect(words("GarlicGo likes to eat garlic", {} as unknown as string)).toEqual([]);
    });

    test("other types", () => {
        expect(words(undefined as unknown as string)).toEqual([]);
        expect(words(null as unknown as string)).toEqual([]);
        expect(words(true as unknown as string)).toEqual([]);
        expect(words(new Boolean(false) as unknown as string)).toEqual([]);
        expect(words(6 as unknown as string)).toEqual([]);
        expect(words(new Number(6.6) as unknown as string)).toEqual([]);
        expect(words(Symbol(6) as unknown as string)).toEqual([]);
        expect(words({} as unknown as string)).toEqual([]);
        expect(words(new Object() as unknown as string)).toEqual([]);
        expect(words([] as unknown as string)).toEqual([]);
        expect(words(new Array(6) as unknown as string)).toEqual([]);
        expect(words(console.log as unknown as string)).toEqual([]);
        expect(words(new Date() as unknown as string)).toEqual([]);
        expect(words(new RegExp("6") as unknown as string)).toEqual([]);
        expect(words(new Map() as unknown as string)).toEqual([]);
        expect(words(new WeakMap() as unknown as string)).toEqual([]);
        expect(words(new Set() as unknown as string)).toEqual([]);
        expect(words(new WeakSet() as unknown as string)).toEqual([]);
    });
});
