import Benchmark from "benchmark";
import { green } from "colors";

function gcdBtwn_Stein(a = 0, b = 0): number {
    if (a == 0) {
        return b == 0 ? NaN : b;
    }
    let offset = 0;
    while ((a & 1) == 0 && (b & 1) == 0) {
        a = a >> 1;
        b = b >> 1;
        offset++;
    }
    while ((a & 1) == 0) {
        a = a >> 1;
    }
    while ((b & 1) == 0) {
        b = b >> 1;
    }
    if (a < b) {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
    }
    a = (a - b) >> 1;
    return gcdBtwn_Stein(a, b) << offset;
}

function gcdBtwn_Euclid(a = 0, b = 0): number {
    if (a == 0 && b == 0) return NaN;
    return b == 0 ? a : gcdBtwn_Euclid(b, a % b);
}

new Benchmark.Suite()
    .add("gcdBtwn_Stein", () => {
        gcdBtwn_Stein(6, 66);
        gcdBtwn_Stein(66, 666);
        gcdBtwn_Stein(666, 6666);
        gcdBtwn_Stein(6666, 66666);
        gcdBtwn_Stein(66666, 666666);
        gcdBtwn_Stein(1769, 550);
        gcdBtwn_Stein(4655, 12075);
        gcdBtwn_Stein(24140, 16762);
        gcdBtwn_Stein(10456, 51230);
        gcdBtwn_Stein(3857445, 7823492);
        gcdBtwn_Stein(4566897387, 11387399);
        gcdBtwn_Stein(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    })
    .add("gcdBtwn_Euclid", () => {
        gcdBtwn_Euclid(6, 66);
        gcdBtwn_Euclid(66, 666);
        gcdBtwn_Euclid(666, 6666);
        gcdBtwn_Euclid(6666, 66666);
        gcdBtwn_Euclid(66666, 666666);
        gcdBtwn_Euclid(1769, 550);
        gcdBtwn_Euclid(4655, 12075);
        gcdBtwn_Euclid(24140, 16762);
        gcdBtwn_Euclid(10456, 51230);
        gcdBtwn_Euclid(3857445, 7823492);
        gcdBtwn_Euclid(4566897387, 11387399);
        gcdBtwn_Euclid(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
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
