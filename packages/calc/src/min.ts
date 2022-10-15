import { isNum, isStrictNaN, isArr } from "@ytils/typ";

export function min(...values: (number | number[])[]): number {
    let minVal = Number.MAX_VALUE;
    for (let i = values.length - 1; i >= 0; i--) {
        if (isStrictNaN(values[i])) {
            return NaN;
        } else if (isNum(values[i])) {
            minVal = minVal < (values[i] as number) ? minVal : (values[i] as number);
        } else if (isArr(values[i])) {
            minVal = min(...(values[i] as number[]));
        }
    }
    return minVal.valueOf();
}
