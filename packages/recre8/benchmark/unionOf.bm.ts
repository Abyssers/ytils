import Benchmark from "benchmark";
import { green } from "colors";
import { isArr } from "@ytils/typ";
import { isEq } from "@ytils/cmpr";

function unionOf_ByReduce<T>(...values: (T | T[])[]): T[] {
    const sylloge = values.reduce(
        (sylloge: T[], value: T | T[]) => [...sylloge, ...(isArr(value) ? (value as T[]) : [value as T])],
        [] as T[]
    ) as T[];
    return sylloge.filter((itemL, idx) => sylloge.findIndex(itemR => isEq(itemL, itemR)) === idx);
}

function unionOf_ByFor_UsingPush<T>(...values: (T | T[])[]): T[] {
    const sylloge: T[] = [];
    for (let i = values.length - 1; i >= 0; i--) {
        sylloge.push(...(isArr(values[i]) ? (values[i] as T[]) : [values[i] as T]));
    }
    return sylloge.filter((itemL, idx) => sylloge.findIndex(itemR => isEq(itemL, itemR)) === idx);
}

function unionOf_ByFor_UsingRestOp<T>(...values: (T | T[])[]): T[] {
    let sylloge: T[] = [];
    for (let i = values.length - 1; i >= 0; i--) {
        sylloge = [...sylloge, ...(isArr(values[i]) ? (values[i] as T[]) : [values[i] as T])];
    }
    return sylloge.filter((itemL, idx) => sylloge.findIndex(itemR => isEq(itemL, itemR)) === idx);
}

new Benchmark.Suite()
    .add("unionOf_ByReduce", () => {
        unionOf_ByReduce([]);
        unionOf_ByReduce(1, 2, 3);
        unionOf_ByReduce([1], [2], [3]);
        unionOf_ByReduce([1, 2, 3], [2, 3, 4]);
        unionOf_ByReduce([1, 2, 3], [2, 3, 4], [3, 4, 5]);
        unionOf_ByReduce([{ age: 18 }, { age: 18 }], { age: 18 });
        unionOf_ByReduce([{ age: 18 }, { age: 19 }], [{ age: 19 }, { age: 20 }]);
        unionOf_ByReduce([{ age: 18 }, { age: 19 }], { age: 20 });
        unionOf_ByReduce([{ age: 18 }, { age: 19 }], { age: 20 }, { age: 21 }, [{ age: 22 }, { age: 23 }]);
    })
    .add("unionOf_ByFor_UsingPush", () => {
        unionOf_ByFor_UsingPush([]);
        unionOf_ByFor_UsingPush(1, 2, 3);
        unionOf_ByFor_UsingPush([1], [2], [3]);
        unionOf_ByFor_UsingPush([1, 2, 3], [2, 3, 4]);
        unionOf_ByFor_UsingPush([1, 2, 3], [2, 3, 4], [3, 4, 5]);
        unionOf_ByFor_UsingPush([{ age: 18 }, { age: 18 }], { age: 18 });
        unionOf_ByFor_UsingPush([{ age: 18 }, { age: 19 }], [{ age: 19 }, { age: 20 }]);
        unionOf_ByFor_UsingPush([{ age: 18 }, { age: 19 }], { age: 20 });
        unionOf_ByFor_UsingPush([{ age: 18 }, { age: 19 }], { age: 20 }, { age: 21 }, [{ age: 22 }, { age: 23 }]);
    })
    .add("unionOf_ByFor_UsingRestOp", () => {
        unionOf_ByFor_UsingRestOp([]);
        unionOf_ByFor_UsingRestOp(1, 2, 3);
        unionOf_ByFor_UsingRestOp([1], [2], [3]);
        unionOf_ByFor_UsingRestOp([1, 2, 3], [2, 3, 4]);
        unionOf_ByFor_UsingRestOp([1, 2, 3], [2, 3, 4], [3, 4, 5]);
        unionOf_ByFor_UsingRestOp([{ age: 18 }, { age: 18 }], { age: 18 });
        unionOf_ByFor_UsingRestOp([{ age: 18 }, { age: 19 }], [{ age: 19 }, { age: 20 }]);
        unionOf_ByFor_UsingRestOp([{ age: 18 }, { age: 19 }], { age: 20 });
        unionOf_ByFor_UsingRestOp([{ age: 18 }, { age: 19 }], { age: 20 }, { age: 21 }, [{ age: 22 }, { age: 23 }]);
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
