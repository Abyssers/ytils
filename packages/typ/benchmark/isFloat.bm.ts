import Benchmark from "benchmark";
import { green } from "colors";
import { tagOf, Tag } from "../src/.internal/tag";

function isFloat_OneBreath_ByPlus(value: any): boolean {
    return tagOf(value) === Tag.Number && !Number.isNaN(+value) && !Number.isInteger(+value) && Number.isFinite(+value);
}

function isFloat_OneBreath_ByNumber(value: any): boolean {
    return (
        tagOf(value) === Tag.Number &&
        !Number.isNaN(Number(value)) &&
        !Number.isInteger(Number(value)) &&
        Number.isFinite(Number(value))
    );
}

function isFloat_TransformFirst_ByPlus(value: any): boolean {
    if (tagOf(value) !== Tag.Number) return false;
    const transformed = +value;
    return !Number.isNaN(transformed) && !Number.isInteger(transformed) && Number.isFinite(transformed);
}

function isFloat_TransformFirst_ByNumber(value: any): boolean {
    if (tagOf(value) !== Tag.Number) return false;
    const transformed = Number(value);
    return !Number.isNaN(transformed) && !Number.isInteger(transformed) && Number.isFinite(transformed);
}

new Benchmark.Suite()
    .add("isFloat_OneBreath_ByPlus", () => {
        isFloat_OneBreath_ByPlus(6.6);
        isFloat_OneBreath_ByPlus(6.66);
        isFloat_OneBreath_ByPlus(6.666);
        isFloat_OneBreath_ByPlus(6.6666);
        isFloat_OneBreath_ByPlus(6.66666);
        isFloat_OneBreath_ByPlus(6);
        isFloat_OneBreath_ByPlus(true);
        isFloat_OneBreath_ByPlus("6");
        isFloat_OneBreath_ByPlus({});
        isFloat_OneBreath_ByPlus([]);
    })
    .add("isFloat_OneBreath_ByNumber", () => {
        isFloat_OneBreath_ByNumber(6.6);
        isFloat_OneBreath_ByNumber(6.66);
        isFloat_OneBreath_ByNumber(6.666);
        isFloat_OneBreath_ByNumber(6.6666);
        isFloat_OneBreath_ByNumber(6.66666);
        isFloat_OneBreath_ByNumber(6);
        isFloat_OneBreath_ByNumber(true);
        isFloat_OneBreath_ByNumber("6");
        isFloat_OneBreath_ByNumber({});
        isFloat_OneBreath_ByNumber([]);
    })
    .add("isFloat_TransformFirst_ByPlus", () => {
        isFloat_TransformFirst_ByPlus(6.6);
        isFloat_TransformFirst_ByPlus(6.66);
        isFloat_TransformFirst_ByPlus(6.666);
        isFloat_TransformFirst_ByPlus(6.6666);
        isFloat_TransformFirst_ByPlus(6.66666);
        isFloat_TransformFirst_ByPlus(6);
        isFloat_TransformFirst_ByPlus(true);
        isFloat_TransformFirst_ByPlus("6");
        isFloat_TransformFirst_ByPlus({});
        isFloat_TransformFirst_ByPlus([]);
    })
    .add("isFloat_TransformFirst_ByNumber", () => {
        isFloat_TransformFirst_ByNumber(6.6);
        isFloat_TransformFirst_ByNumber(6.66);
        isFloat_TransformFirst_ByNumber(6.666);
        isFloat_TransformFirst_ByNumber(6.6666);
        isFloat_TransformFirst_ByNumber(6.66666);
        isFloat_TransformFirst_ByNumber(6);
        isFloat_TransformFirst_ByNumber(true);
        isFloat_TransformFirst_ByNumber("6");
        isFloat_TransformFirst_ByNumber({});
        isFloat_TransformFirst_ByNumber([]);
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
