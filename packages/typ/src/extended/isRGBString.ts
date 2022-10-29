import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a valid RGB string that can be recognized by CSS.
 * [MDN RGB color model](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_color_model)
 * @param value The value to check
 * @returns {boolean} Returns true if value is a valid RGB string that can be recognized by CSS, else false
 * @example
 *
 * isRGBString("rgb(+255, -255, 255)")
 * // => true
 *
 * isRGBString("rgb(+255 -255 255)")
 * // => true
 *
 * isRGBString(" rgb(  +255,   -255,    255     )      ")
 * // => true
 *
 * isRGBString("rgb(+127.5, -127.5, 127.5)")
 * // => true
 *
 * isRGBString("rgb(+50%, -50%, 50%)")
 * // => true
 *
 * isRGBString("rgb(50%, 50, 50%)")
 * // => false
 *
 * isRGBString("rgb(50, 50., 50)")
 * // => false
 */
export function isRGBString(value: any): value is string {
    const n = "[+-]?(\\d+(\\.\\d+)?|\\.?\\d+)"; // css rgb doesn't support number in the type of "x." as the value of r, g or b
    return (
        typeTagOf(value) === TypeTag.String &&
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

export const isRGBStr = isRGBString;
