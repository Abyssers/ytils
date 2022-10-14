import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a valid RGB string that can be recognized by CSS.
 * [MDN RGB color model](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_color_model)
 * @param value The value to check
 * @returns {boolean} Returns true if value is a valid RGB string that can be recognized by CSS, else false
 * @example
 *
 * isRGBStr("rgb(+255, -255, 255)")
 * // => true
 *
 * isRGBStr("rgb(+255 -255 255)")
 * // => true
 *
 * isRGBStr(" rgb(  +255,   -255,    255     )      ")
 * // => true
 *
 * isRGBStr("rgb(+127.5, -127.5, 127.5)")
 * // => true
 *
 * isRGBStr("rgb(+50%, -50%, 50%)")
 * // => true
 *
 * isRGBStr("rgb(50%, 50, 50%)")
 * // => false
 *
 * isRGBStr("rgb(50, 50., 50)")
 * // => false
 */
export function isRGBStr(value: any): value is string {
    const n = "[+-]?(\\d+(\\.\\d+)?|\\.?\\d+)"; // css rgb doesn't support number in the type of "x." as the value of r, g or b
    return (
        tagOf(value) === Tag.String &&
        new RegExp(
            `^ *rgb\\((${[
                `( *(${n})+ *,){2} *(${n})+`,
                `( *(${n}%)+ *,){2} *(${n}%)+`,
                `( *(${n})+ +){2}(${n})+`,
                `( *(${n}%)+ +){2}(${n}%)+`,
            ].join("|")}) *\\) *$`
        ).test(value)
    );
}
