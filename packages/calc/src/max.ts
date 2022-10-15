import { isNum, isStrictNaN, isArr } from "@ytils/typ";

export function max(...values: (number | number[])[]): number {
    let maxVal = Number.MIN_VALUE;
    for (let i = values.length - 1; i >= 0; i--) {
        if (isStrictNaN(values[i])) {
            return NaN;
        } else if (isNum(values[i])) {
            maxVal = maxVal > (values[i] as number) ? maxVal : (values[i] as number);
        } else if (isArr(values[i])) {
            maxVal = max(...(values[i] as number[]));
        }
    }
    return maxVal.valueOf();
}
