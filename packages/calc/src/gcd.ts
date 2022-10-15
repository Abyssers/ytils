import { isNum, isStrictNaN, isArr } from "@ytils/typ";

export function gcd(...values: (number | number[])[]): number {
    let gcdVal;
    for (let i = values.length - 1; i >= 0; i--) {
        if (isStrictNaN(values[i])) {
            return NaN;
        } else if (isNum(values[i])) {
            if (gcdVal === undefined) {
                gcdVal = values[i] as number;
                continue;
            }
            gcdVal = gcdBtwn(gcdVal, values[i] as number);
        } else if (isArr(values[i]) && (values[i] as number[]).length > 0) {
            if (gcdVal === undefined) {
                gcdVal = gcd(...(values[i] as number[]));
                continue;
            }
            gcdVal = gcdBtwn(gcdVal, gcd(...(values[i] as number[])));
        }
    }
    return gcdVal === undefined ? NaN : gcdVal.valueOf();
}

function gcdBtwn(a = 0, b = 0): number {
    if (a == 0 && b == 0) return NaN;
    return b == 0 ? a : gcdBtwn(b, a % b);
}
