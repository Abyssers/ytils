import { typeTagOf, TypeTag } from "../.internal/tag";

/**
 * Checks whether value is a DataView object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a DataView object, else false
 * @example
 *
 * isDataView(new DataView(new ArrayBuffer()))
 * // => true
 *
 * isDataView(new ArrayBuffer())
 * // => false
 *
 * isDataView([])
 * // => false
 *
 * isDataView(6)
 * // => false
 *
 * isDataView("6")
 * // => false
 */
export function isDataView(value: any): value is DataView {
    return typeTagOf(value) === TypeTag.DataView;
}

export const isDV = isDataView;
