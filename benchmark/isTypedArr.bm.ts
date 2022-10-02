import Benchmark from "benchmark";
import { green } from "colors";
import { tagOf, TypeTag } from "../src/.core/tag";

function isTypedArr_ByEnumeration(value: any): boolean {
    const tag = tagOf(value);
    return (
        tag === TypeTag.BigInt64Array ||
        tag === TypeTag.BigUint64Array ||
        tag === TypeTag.Float32Array ||
        tag === TypeTag.Float64Array ||
        tag === TypeTag.Int16Array ||
        tag === TypeTag.Int32Array ||
        tag === TypeTag.Int8Array ||
        tag === TypeTag.Uint16Array ||
        tag === TypeTag.Uint32Array ||
        tag === TypeTag.Uint8Array ||
        tag === TypeTag.Uint8ClampedArray
    );
}

function isTypedArr_ByRegExp(value: any): boolean {
    return /^\[object (Float(32|64)|(I|Ui)nt(8|16|32)|Uint8Clamped|Big(I|Ui)nt64)Array\]$/.test(tagOf(value));
}

new Benchmark.Suite()
    .add("isTypedArr_ByEnumeration", () => {
        isTypedArr_ByEnumeration(new BigInt64Array());
        isTypedArr_ByEnumeration(new BigUint64Array());
        isTypedArr_ByEnumeration(new Float32Array());
        isTypedArr_ByEnumeration(new Float64Array());
        isTypedArr_ByEnumeration(new Int16Array());
        isTypedArr_ByEnumeration(new Int32Array());
        isTypedArr_ByEnumeration(new Int8Array());
        isTypedArr_ByEnumeration(new Uint16Array());
        isTypedArr_ByEnumeration(new Uint32Array());
        isTypedArr_ByEnumeration(new Uint8Array());
        isTypedArr_ByEnumeration(new Uint8ClampedArray());
        isTypedArr_ByEnumeration("6.6");
        isTypedArr_ByEnumeration("6.66");
        isTypedArr_ByEnumeration("6.666");
        isTypedArr_ByEnumeration("6.6666");
        isTypedArr_ByEnumeration("6.66666");
        isTypedArr_ByEnumeration(6);
        isTypedArr_ByEnumeration(true);
        isTypedArr_ByEnumeration("abc");
        isTypedArr_ByEnumeration(console.log);
        isTypedArr_ByEnumeration({});
        isTypedArr_ByEnumeration([]);
    })
    .add("isTypedArr_ByRegExp", () => {
        isTypedArr_ByRegExp(new BigInt64Array());
        isTypedArr_ByRegExp(new BigUint64Array());
        isTypedArr_ByRegExp(new Float32Array());
        isTypedArr_ByRegExp(new Float64Array());
        isTypedArr_ByRegExp(new Int16Array());
        isTypedArr_ByRegExp(new Int32Array());
        isTypedArr_ByRegExp(new Int8Array());
        isTypedArr_ByRegExp(new Uint16Array());
        isTypedArr_ByRegExp(new Uint32Array());
        isTypedArr_ByRegExp(new Uint8Array());
        isTypedArr_ByRegExp(new Uint8ClampedArray());
        isTypedArr_ByRegExp("6.6");
        isTypedArr_ByRegExp("6.66");
        isTypedArr_ByRegExp("6.666");
        isTypedArr_ByRegExp("6.6666");
        isTypedArr_ByRegExp("6.66666");
        isTypedArr_ByRegExp(6);
        isTypedArr_ByRegExp(true);
        isTypedArr_ByRegExp("abc");
        isTypedArr_ByRegExp(console.log);
        isTypedArr_ByRegExp({});
        isTypedArr_ByRegExp([]);
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
