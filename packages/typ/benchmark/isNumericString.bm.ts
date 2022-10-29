import Benchmark from "benchmark";
import { green } from "colors";
import { typeTagOf, TypeTag } from "../src/.internal/tag";

function isNumericString_ByNumber(value: any): boolean {
    return typeTagOf(value) === TypeTag.String && !Number.isNaN(+value);
}

function isNumericString_ByRegExp(value: any): boolean {
    return typeTagOf(value) === TypeTag.String && /^ *[+-]?(\d+\.?\d*|\.?\d+) *$/.test(value);
}

new Benchmark.Suite()
    .add("isNumericString_ByNumber", () => {
        isNumericString_ByNumber("6.6");
        isNumericString_ByNumber("6.66");
        isNumericString_ByNumber("6.666");
        isNumericString_ByNumber("6.6666");
        isNumericString_ByNumber("6.66666");
        isNumericString_ByNumber(6);
        isNumericString_ByNumber(true);
        isNumericString_ByNumber("abc");
        isNumericString_ByNumber({});
        isNumericString_ByNumber([]);
    })
    .add("isNumericString_ByRegExp", () => {
        isNumericString_ByRegExp("6.6");
        isNumericString_ByRegExp("6.66");
        isNumericString_ByRegExp("6.666");
        isNumericString_ByRegExp("6.6666");
        isNumericString_ByRegExp("6.66666");
        isNumericString_ByRegExp(6);
        isNumericString_ByRegExp(true);
        isNumericString_ByRegExp("abc");
        isNumericString_ByRegExp({});
        isNumericString_ByRegExp([]);
    })
    .on("cycle", function (event: any) {
        console.log(`${green(">")} ${event.target}`);
    })
    .on("complete", function () {
        console.log(
            `${green("OPS/SEC Ranking:")} ${(this.map((bench: any) => ({ name: bench.name, hz: bench.hz })) as any[])
                .sort((benchA, benchB) => benchB.hz - benchA.hz)
                .map(bench => bench.name)
                .join(", ")}`
        );
    })
    .run({ async: false });
