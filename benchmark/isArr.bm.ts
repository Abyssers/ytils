import Benchmark from "benchmark";
import { green } from "colors";
import { tagOf, TypeTag } from "../src/.internal/tag";

function isArr_ByConstructor(value: any): boolean {
    if (value == null) return false;
    return value.constructor === Array;
}

function isArr_ByProto(value: any): boolean {
    if (value == null) return false;
    return Object.getPrototypeOf(value) === Array.prototype;
}

function isArr_ByTag(value: any): boolean {
    return tagOf(value) === TypeTag.Array;
}

function isArr_ByNative(value: any): boolean {
    return Array.isArray(value);
}

new Benchmark.Suite()
    .add("isArr_ByConstructor", () => {
        isArr_ByConstructor(6);
        isArr_ByConstructor(new Number(6));
        isArr_ByConstructor(true);
        isArr_ByConstructor(new Boolean(false));
        isArr_ByConstructor("6");
        isArr_ByConstructor(new String("6"));
        isArr_ByConstructor({});
        isArr_ByConstructor([]);
        isArr_ByConstructor([6]);
        isArr_ByConstructor([{}]);
        isArr_ByConstructor(new Array(6));
        isArr_ByConstructor([...new Set()]);
        isArr_ByConstructor("666666".split(""));
        isArr_ByConstructor([].concat([]));
    })
    .add("isArr_ByProto", () => {
        isArr_ByProto(6);
        isArr_ByProto(new Number(6));
        isArr_ByProto(true);
        isArr_ByProto(new Boolean(false));
        isArr_ByProto("6");
        isArr_ByProto(new String("6"));
        isArr_ByProto({});
        isArr_ByProto([]);
        isArr_ByProto([6]);
        isArr_ByProto([{}]);
        isArr_ByProto(new Array(6));
        isArr_ByProto([...new Set()]);
        isArr_ByProto("666666".split(""));
        isArr_ByProto([].concat([]));
    })
    .add("isArr_ByTag", () => {
        isArr_ByTag(6);
        isArr_ByTag(new Number(6));
        isArr_ByTag(true);
        isArr_ByTag(new Boolean(false));
        isArr_ByTag("6");
        isArr_ByTag(new String("6"));
        isArr_ByTag({});
        isArr_ByTag([]);
        isArr_ByTag([6]);
        isArr_ByTag([{}]);
        isArr_ByTag(new Array(6));
        isArr_ByTag([...new Set()]);
        isArr_ByTag("666666".split(""));
        isArr_ByTag([].concat([]));
    })
    .add("isArr_ByNative", () => {
        isArr_ByNative(6);
        isArr_ByNative(new Number(6));
        isArr_ByNative(true);
        isArr_ByNative(new Boolean(false));
        isArr_ByNative("6");
        isArr_ByNative(new String("6"));
        isArr_ByNative({});
        isArr_ByNative([]);
        isArr_ByNative([6]);
        isArr_ByNative([{}]);
        isArr_ByNative(new Array(6));
        isArr_ByNative([...new Set()]);
        isArr_ByNative("666666".split(""));
        isArr_ByNative([].concat([]));
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
