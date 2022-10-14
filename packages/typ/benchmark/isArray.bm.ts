import Benchmark from "benchmark";
import { green } from "colors";
import { tagOf, Tag } from "../src/.internal/tag";

function isArray_ByConstructor(value: any): boolean {
    if (value == null) return false;
    return value.constructor === Array;
}

function isArray_ByProto(value: any): boolean {
    if (value == null) return false;
    return Object.getPrototypeOf(value) === Array.prototype;
}

function isArray_ByTag(value: any): boolean {
    return tagOf(value) === Tag.Array;
}

function isArray_ByNative(value: any): boolean {
    return Array.isArray(value);
}

new Benchmark.Suite()
    .add("isArray_ByConstructor", () => {
        isArray_ByConstructor(6);
        isArray_ByConstructor(new Number(6));
        isArray_ByConstructor(true);
        isArray_ByConstructor(new Boolean(false));
        isArray_ByConstructor("6");
        isArray_ByConstructor(new String("6"));
        isArray_ByConstructor({});
        isArray_ByConstructor([]);
        isArray_ByConstructor([6]);
        isArray_ByConstructor([{}]);
        isArray_ByConstructor(new Array(6));
        isArray_ByConstructor([...new Set()]);
        isArray_ByConstructor("666666".split(""));
        isArray_ByConstructor([].concat([]));
    })
    .add("isArray_ByProto", () => {
        isArray_ByProto(6);
        isArray_ByProto(new Number(6));
        isArray_ByProto(true);
        isArray_ByProto(new Boolean(false));
        isArray_ByProto("6");
        isArray_ByProto(new String("6"));
        isArray_ByProto({});
        isArray_ByProto([]);
        isArray_ByProto([6]);
        isArray_ByProto([{}]);
        isArray_ByProto(new Array(6));
        isArray_ByProto([...new Set()]);
        isArray_ByProto("666666".split(""));
        isArray_ByProto([].concat([]));
    })
    .add("isArray_ByTag", () => {
        isArray_ByTag(6);
        isArray_ByTag(new Number(6));
        isArray_ByTag(true);
        isArray_ByTag(new Boolean(false));
        isArray_ByTag("6");
        isArray_ByTag(new String("6"));
        isArray_ByTag({});
        isArray_ByTag([]);
        isArray_ByTag([6]);
        isArray_ByTag([{}]);
        isArray_ByTag(new Array(6));
        isArray_ByTag([...new Set()]);
        isArray_ByTag("666666".split(""));
        isArray_ByTag([].concat([]));
    })
    .add("isArray_ByNative", () => {
        isArray_ByNative(6);
        isArray_ByNative(new Number(6));
        isArray_ByNative(true);
        isArray_ByNative(new Boolean(false));
        isArray_ByNative("6");
        isArray_ByNative(new String("6"));
        isArray_ByNative({});
        isArray_ByNative([]);
        isArray_ByNative([6]);
        isArray_ByNative([{}]);
        isArray_ByNative(new Array(6));
        isArray_ByNative([...new Set()]);
        isArray_ByNative("666666".split(""));
        isArray_ByNative([].concat([]));
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
