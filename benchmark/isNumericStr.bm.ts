import Benchmark from "benchmark";
import { green } from "colors";
import { tagOf, TypeTag } from "../src/.internal/tag";

function isNumericStr_ByNumber(value: any): boolean {
    return tagOf(value) === TypeTag.String && !Number.isNaN(+value);
}

function isNumericStr_ByRegExp(value: any): boolean {
    return tagOf(value) === TypeTag.String && /^ *[+-]?(\d+\.?\d*|\.?\d+) *$/.test(value);
}

new Benchmark.Suite()
    .add("isNumericStr_ByNumber", () => {
        isNumericStr_ByNumber("6.6");
        isNumericStr_ByNumber("6.66");
        isNumericStr_ByNumber("6.666");
        isNumericStr_ByNumber("6.6666");
        isNumericStr_ByNumber("6.66666");
        isNumericStr_ByNumber(6);
        isNumericStr_ByNumber(true);
        isNumericStr_ByNumber("abc");
        isNumericStr_ByNumber({});
        isNumericStr_ByNumber([]);
    })
    .add("isNumericStr_ByRegExp", () => {
        isNumericStr_ByRegExp("6.6");
        isNumericStr_ByRegExp("6.66");
        isNumericStr_ByRegExp("6.666");
        isNumericStr_ByRegExp("6.6666");
        isNumericStr_ByRegExp("6.66666");
        isNumericStr_ByRegExp(6);
        isNumericStr_ByRegExp(true);
        isNumericStr_ByRegExp("abc");
        isNumericStr_ByRegExp({});
        isNumericStr_ByRegExp([]);
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
