import { tagOf, TypeTag } from "../.internal/tag";

/**
 * Gets words of text.
 * @param {string} text The text to get from
 * @param {string[] | string | RegExp} lcp lexicon / characters / pattern
 * @returns {string[]} Returns words of text
 * @example
 *
 * wordsOf("GarlicGo likes to eat garlic")
 * // => ["GarlicGo", "likes", "to", "eat", "garlic"]
 *
 * wordsOf("GarlicGo likes to eat garlic", /[a-z]+/gmu)
 * // => ["arlic", "o", "likes", "to", "eat", "garlic"]
 *
 * wordsOf("GarlicGo likes to eat garlic", "acgilor")
 * // => ["GarlicGo", "li", "o", "a", "garlic"]
 *
 * wordsOf("GarlicGo likes to eat garlic", ["GarlicGo", "garlic"])
 * // => ["GarlicGo", "garlic"]
 */
export function wordsOf(text: string, pattern?: RegExp): string[];
export function wordsOf(text: string, lexicon: string[]): string[];
export function wordsOf(text: string, characters: string): string[];
export function wordsOf(text: string, lcp: RegExp | string[] | string = /[0-9a-zA-Z]+/gmu): string[] {
    if (tagOf(text) !== TypeTag.String) return [];
    const tag = tagOf(lcp);
    if (tag === TypeTag.RegExp) {
        return text.match(lcp as RegExp) || [];
    }
    if (tag === TypeTag.String) {
        if ((lcp as string).length === 0) return [];
        return (
            text.match(
                new RegExp(
                    `[${[...new Set((lcp as string).valueOf())]
                        .join("")
                        .replace(/ +/g, "")
                        .replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")}]+`,
                    "gimu"
                )
            ) || []
        );
    }
    if (Array.isArray(lcp)) {
        if (lcp.length === 0) return [];
        return (
            text.match(
                new RegExp(
                    `(${[
                        ...new Set((lcp as string[]).filter(l => tagOf(l) === TypeTag.String).map(l => l.valueOf())),
                    ].join("|")})`,
                    "gmu"
                )
            ) || []
        );
    }
    return [];
}
