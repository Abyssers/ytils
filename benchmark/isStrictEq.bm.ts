import Benchmark from "benchmark";
import { green } from "colors";
import { isStrictNaN } from "../src/type/isStrictNaN";

function isStrictEq_ByIsStrictNaN(lhs: any, rhs: any): boolean {
    return lhs === rhs || (isStrictNaN(lhs) && isStrictNaN(rhs));
}

function isStrictEq_ByNotEqual2Self(lhs: any, rhs: any): boolean {
    return lhs === rhs || (lhs !== lhs && rhs !== rhs);
}

new Benchmark.Suite()
    .add("isStrictEq_ByIsStrictNaN", () => {
        isStrictEq_ByIsStrictNaN(6, 6);
        isStrictEq_ByIsStrictNaN(new Number(6), new Number(6));
        isStrictEq_ByIsStrictNaN(NaN, NaN);
        isStrictEq_ByIsStrictNaN(new Number(NaN), new Number(NaN));
        isStrictEq_ByIsStrictNaN("6", "6");
        isStrictEq_ByIsStrictNaN(new String("6"), new String("6"));
        isStrictEq_ByIsStrictNaN(true, true);
        isStrictEq_ByIsStrictNaN(new Boolean(false), new Boolean(false));
        isStrictEq_ByIsStrictNaN(6, 6.6);
        isStrictEq_ByIsStrictNaN(new Number(6), new Number(6.6));
        isStrictEq_ByIsStrictNaN("6", "6.6");
        isStrictEq_ByIsStrictNaN(new String("6"), new String("6.6"));
        isStrictEq_ByIsStrictNaN({}, {});
        isStrictEq_ByIsStrictNaN([], []);
        isStrictEq_ByIsStrictNaN(console.log, console.log);
    })
    .add("isStrictEq_ByNotEqual2Self", () => {
        isStrictEq_ByNotEqual2Self(6, 6);
        isStrictEq_ByNotEqual2Self(new Number(6), new Number(6));
        isStrictEq_ByNotEqual2Self(NaN, NaN);
        isStrictEq_ByNotEqual2Self(new Number(NaN), new Number(NaN));
        isStrictEq_ByNotEqual2Self("6", "6");
        isStrictEq_ByNotEqual2Self(new String("6"), new String("6"));
        isStrictEq_ByNotEqual2Self(true, true);
        isStrictEq_ByNotEqual2Self(new Boolean(false), new Boolean(false));
        isStrictEq_ByNotEqual2Self(6, 6.6);
        isStrictEq_ByNotEqual2Self(new Number(6), new Number(6.6));
        isStrictEq_ByNotEqual2Self("6", "6.6");
        isStrictEq_ByNotEqual2Self(new String("6"), new String("6.6"));
        isStrictEq_ByNotEqual2Self({}, {});
        isStrictEq_ByNotEqual2Self([], []);
        isStrictEq_ByNotEqual2Self(console.log, console.log);
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
