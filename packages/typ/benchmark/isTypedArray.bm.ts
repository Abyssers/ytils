import Benchmark from "benchmark";
import { green } from "colors";
import { typeTagOf, TypeTag } from "../src/.internal/tag";

function isTypedArray_ByEnumeration(value: any): boolean {
    const tag = typeTagOf(value);
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

function isTypedArray_ByRegExp(value: any): boolean {
    return /^\[object (Float(32|64)|(I|Ui)nt(8|16|32)|Uint8Clamped|Big(I|Ui)nt64)Array\]$/.test(typeTagOf(value));
}

new Benchmark.Suite()
    .add("isTypedArray_ByEnumeration", () => {
        isTypedArray_ByEnumeration(new Float32Array());
        isTypedArray_ByEnumeration(new Float64Array());
        isTypedArray_ByEnumeration(new Int16Array());
        isTypedArray_ByEnumeration(new Int32Array());
        isTypedArray_ByEnumeration(new Int8Array());
        isTypedArray_ByEnumeration(new Uint16Array());
        isTypedArray_ByEnumeration(new Uint32Array());
        isTypedArray_ByEnumeration(new Uint8Array());
        isTypedArray_ByEnumeration(new Uint8ClampedArray());
        isTypedArray_ByEnumeration(new BigInt64Array());
        isTypedArray_ByEnumeration(new BigUint64Array());
        isTypedArray_ByEnumeration("6.6");
        isTypedArray_ByEnumeration("6.66");
        isTypedArray_ByEnumeration("6.666");
        isTypedArray_ByEnumeration("6.6666");
        isTypedArray_ByEnumeration("6.66666");
        isTypedArray_ByEnumeration(6);
        isTypedArray_ByEnumeration(true);
        isTypedArray_ByEnumeration("abc");
        isTypedArray_ByEnumeration(console.log);
        isTypedArray_ByEnumeration({});
        isTypedArray_ByEnumeration([]);
    })
    .add("isTypedArray_ByRegExp", () => {
        isTypedArray_ByRegExp(new Float32Array());
        isTypedArray_ByRegExp(new Float64Array());
        isTypedArray_ByRegExp(new Int16Array());
        isTypedArray_ByRegExp(new Int32Array());
        isTypedArray_ByRegExp(new Int8Array());
        isTypedArray_ByRegExp(new Uint16Array());
        isTypedArray_ByRegExp(new Uint32Array());
        isTypedArray_ByRegExp(new Uint8Array());
        isTypedArray_ByRegExp(new Uint8ClampedArray());
        isTypedArray_ByRegExp(new BigInt64Array());
        isTypedArray_ByRegExp(new BigUint64Array());
        isTypedArray_ByRegExp("6.6");
        isTypedArray_ByRegExp("6.66");
        isTypedArray_ByRegExp("6.666");
        isTypedArray_ByRegExp("6.6666");
        isTypedArray_ByRegExp("6.66666");
        isTypedArray_ByRegExp(6);
        isTypedArray_ByRegExp(true);
        isTypedArray_ByRegExp("abc");
        isTypedArray_ByRegExp(console.log);
        isTypedArray_ByRegExp({});
        isTypedArray_ByRegExp([]);
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
