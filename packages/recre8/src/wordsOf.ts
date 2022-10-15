import { isStr, isRegExp, isArr } from "@ytils/typ";

/**
 * Gets words of value.
 * @param {string} value The value to get from
 * @param {string[] | string | RegExp} plc lexicon / characters / pattern
 * @returns {string[]} Returns words of value
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
export function wordsOf(value: string, pattern?: RegExp): string[];
export function wordsOf(value: string, lexicon: string[]): string[];
export function wordsOf(value: string, characters: string): string[];
export function wordsOf(value: string, plc: RegExp | string[] | string = /[0-9a-zA-Z]+/gmu): string[] {
    if (!isStr(value)) return [];
    if (isRegExp(plc)) {
        return value.match(plc) || [];
    }
    if (isStr(plc)) {
        if (plc.length === 0) return [];
        return (
            value.match(
                new RegExp(
                    `[${[...new Set(plc.valueOf())]
                        .join("")
                        .replace(/ +/g, "")
                        .replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")}]+`,
                    "gimu"
                )
            ) || []
        );
    }
    if (isArr(plc)) {
        if (plc.length === 0) return [];
        return (
            value.match(
                new RegExp(`(${[...new Set(plc.filter(l => isStr(l)).map(l => l.valueOf()))].join("|")})`, "gmu")
            ) || []
        );
    }
    return [];
}
