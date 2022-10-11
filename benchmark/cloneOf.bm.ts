import Benchmark from "benchmark";
import { green } from "colors";
import { tagOf, TypeTag } from "../src/.internal/tag";
import { isFunc } from "../src/type/isFunc";

function cloneOf_ByMap_ArrayByTag<T>(value: T): T {
    if (value == null) return value;
    const map = new WeakMap();
    return clone(value);

    function clone(value: any): T {
        if (map.has(value)) {
            return map.get(value);
        }
        const tag = tagOf(value);
        if (tag === TypeTag.Number || tag === TypeTag.Boolean || tag === TypeTag.String) {
            if (typeof value !== "object") return value; // literal
            const cloned = new value.constructor(value);
            map.set(value, cloned);
            return cloned;
        }
        if (
            tag === TypeTag.Date ||
            tag === TypeTag.Error ||
            tag === TypeTag.Map ||
            tag === TypeTag.Set ||
            tag === TypeTag.WeakMap ||
            tag === TypeTag.WeakSet
        ) {
            const cloned = new value.constructor(value);
            map.set(value, cloned);
            return cloned;
        }
        if (tag === TypeTag.RegExp) {
            const cloned = new value.constructor(value);
            cloned.lastIndex = value.lastIndex;
            map.set(value, cloned);
            return cloned;
        }
        if (tag === TypeTag.Symbol || isFunc(value)) return value; // preserve uniqueness
        if (tag === TypeTag.Array) {
            const cloned = value.map((item: any) => clone(item));
            map.set(value, cloned);
            return cloned;
        }
        if (typeof value === "object") {
            const cloned = Object.create(Object.getPrototypeOf(value));
            const keys = Object.keys(value);
            for (let i = keys.length - 1; i >= 0; i--) {
                cloned[keys[i]] = clone(value[keys[i]]);
            }
            map.set(value, cloned);
            return cloned;
        }
        return value;
    }
}

function cloneOf_ByMap_ArrayByNative<T>(value: T): T {
    if (value == null) return value;
    const map = new WeakMap();
    return clone(value);

    function clone(value: any): T {
        if (map.has(value)) {
            return map.get(value);
        }
        const tag = tagOf(value);
        if (tag === TypeTag.Number || tag === TypeTag.Boolean || tag === TypeTag.String) {
            if (typeof value !== "object") return value; // literal
            const cloned = new value.constructor(value);
            map.set(value, cloned);
            return cloned;
        }
        if (
            tag === TypeTag.Date ||
            tag === TypeTag.Error ||
            tag === TypeTag.Map ||
            tag === TypeTag.Set ||
            tag === TypeTag.WeakMap ||
            tag === TypeTag.WeakSet
        ) {
            const cloned = new value.constructor(value);
            map.set(value, cloned);
            return cloned;
        }
        if (tag === TypeTag.RegExp) {
            const cloned = new value.constructor(value);
            cloned.lastIndex = value.lastIndex;
            map.set(value, cloned);
            return cloned;
        }
        if (tag === TypeTag.Symbol || isFunc(value)) return value; // preserve uniqueness
        if (Array.isArray(value)) {
            const cloned = value.map((item: any) => clone(item));
            map.set(value, cloned);
            return cloned as T;
        }
        if (typeof value === "object") {
            const cloned = Object.create(Object.getPrototypeOf(value));
            const keys = Object.keys(value);
            for (let i = keys.length - 1; i >= 0; i--) {
                cloned[keys[i]] = clone(value[keys[i]]);
            }
            map.set(value, cloned);
            return cloned;
        }
        return value;
    }
}

function cloneOf_ByFor_ArrayByTag<T>(value: T): T {
    if (value == null) return value;
    const map = new WeakMap();
    return clone(value);

    function clone(value: any): T {
        if (map.has(value)) {
            return map.get(value);
        }
        const tag = tagOf(value);
        if (tag === TypeTag.Number || tag === TypeTag.Boolean || tag === TypeTag.String) {
            if (typeof value !== "object") return value; // literal
            const cloned = new value.constructor(value);
            map.set(value, cloned);
            return cloned;
        }
        if (
            tag === TypeTag.Date ||
            tag === TypeTag.Error ||
            tag === TypeTag.Map ||
            tag === TypeTag.Set ||
            tag === TypeTag.WeakMap ||
            tag === TypeTag.WeakSet
        ) {
            const cloned = new value.constructor(value);
            map.set(value, cloned);
            return cloned;
        }
        if (tag === TypeTag.RegExp) {
            const cloned = new value.constructor(value);
            cloned.lastIndex = value.lastIndex;
            map.set(value, cloned);
            return cloned;
        }
        if (tag === TypeTag.Symbol || isFunc(value)) return value; // preserve uniqueness
        if (tag === TypeTag.Array) {
            const cloned = new Array(value.length);
            for (let i = value.length - 1; i >= 0; i--) {
                cloned[i] = clone(value[i]);
            }
            map.set(value, cloned);
            return cloned as T;
        }
        if (typeof value === "object") {
            const cloned = Object.create(Object.getPrototypeOf(value));
            const keys = Object.keys(value);
            for (let i = keys.length - 1; i >= 0; i--) {
                cloned[keys[i]] = clone(value[keys[i]]);
            }
            map.set(value, cloned);
            return cloned;
        }
        return value;
    }
}

function cloneOf_ByFor_ArrayByNative<T>(value: T): T {
    if (value == null) return value;
    const map = new WeakMap();
    return clone(value);

    function clone(value: any): T {
        if (map.has(value)) {
            return map.get(value);
        }
        const tag = tagOf(value);
        if (tag === TypeTag.Number || tag === TypeTag.Boolean || tag === TypeTag.String) {
            if (typeof value !== "object") return value; // literal
            const cloned = new value.constructor(value);
            map.set(value, cloned);
            return cloned;
        }
        if (
            tag === TypeTag.Date ||
            tag === TypeTag.Error ||
            tag === TypeTag.Map ||
            tag === TypeTag.Set ||
            tag === TypeTag.WeakMap ||
            tag === TypeTag.WeakSet
        ) {
            const cloned = new value.constructor(value);
            map.set(value, cloned);
            return cloned;
        }
        if (tag === TypeTag.RegExp) {
            const cloned = new value.constructor(value);
            cloned.lastIndex = value.lastIndex;
            map.set(value, cloned);
            return cloned;
        }
        if (tag === TypeTag.Symbol || isFunc(value)) return value; // preserve uniqueness
        if (Array.isArray(value)) {
            const cloned = new Array(value.length);
            for (let i = value.length - 1; i >= 0; i--) {
                cloned[i] = clone(value[i]);
            }
            map.set(value, cloned);
            return cloned as T;
        }
        if (typeof value === "object") {
            const cloned = Object.create(Object.getPrototypeOf(value));
            const keys = Object.keys(value);
            for (let i = keys.length - 1; i >= 0; i--) {
                cloned[keys[i]] = clone(value[keys[i]]);
            }
            map.set(value, cloned);
            return cloned;
        }
        return value;
    }
}

new Benchmark.Suite()
    .add("cloneOf_ByMap_ArrayByTag", () => {
        cloneOf_ByMap_ArrayByTag(6);
        cloneOf_ByMap_ArrayByTag(new Number(6));
        cloneOf_ByMap_ArrayByTag(true);
        cloneOf_ByMap_ArrayByTag(new Boolean(false));
        cloneOf_ByMap_ArrayByTag("6");
        cloneOf_ByMap_ArrayByTag(new String("6"));
        cloneOf_ByMap_ArrayByTag({});
        cloneOf_ByMap_ArrayByTag("666666".split(""));
        cloneOf_ByMap_ArrayByTag([{ name: "abc", children: ["a", "b", "c"] }]);
        cloneOf_ByMap_ArrayByTag(new Set());
        cloneOf_ByMap_ArrayByTag(new Map());
    })
    .add("cloneOf_ByMap_ArrayByNative", () => {
        cloneOf_ByMap_ArrayByNative(6);
        cloneOf_ByMap_ArrayByNative(new Number(6));
        cloneOf_ByMap_ArrayByNative(true);
        cloneOf_ByMap_ArrayByNative(new Boolean(false));
        cloneOf_ByMap_ArrayByNative("6");
        cloneOf_ByMap_ArrayByNative(new String("6"));
        cloneOf_ByMap_ArrayByNative({});
        cloneOf_ByMap_ArrayByNative("666666".split(""));
        cloneOf_ByMap_ArrayByNative([{ name: "abc", children: ["a", "b", "c"] }]);
        cloneOf_ByMap_ArrayByNative(new Set());
        cloneOf_ByMap_ArrayByNative(new Map());
    })
    .add("cloneOf_ByFor_ArrayByTag", () => {
        cloneOf_ByFor_ArrayByTag(6);
        cloneOf_ByFor_ArrayByTag(new Number(6));
        cloneOf_ByFor_ArrayByTag(true);
        cloneOf_ByFor_ArrayByTag(new Boolean(false));
        cloneOf_ByFor_ArrayByTag("6");
        cloneOf_ByFor_ArrayByTag(new String("6"));
        cloneOf_ByFor_ArrayByTag({});
        cloneOf_ByFor_ArrayByTag("666666".split(""));
        cloneOf_ByFor_ArrayByTag([{ name: "abc", children: ["a", "b", "c"] }]);
        cloneOf_ByFor_ArrayByTag(new Set());
        cloneOf_ByFor_ArrayByTag(new Map());
    })
    .add("cloneOf_ByFor_ArrayByNative", () => {
        cloneOf_ByFor_ArrayByNative(6);
        cloneOf_ByFor_ArrayByNative(new Number(6));
        cloneOf_ByFor_ArrayByNative(true);
        cloneOf_ByFor_ArrayByNative(new Boolean(false));
        cloneOf_ByFor_ArrayByNative("6");
        cloneOf_ByFor_ArrayByNative(new String("6"));
        cloneOf_ByFor_ArrayByNative({});
        cloneOf_ByFor_ArrayByNative("666666".split(""));
        cloneOf_ByFor_ArrayByNative([{ name: "abc", children: ["a", "b", "c"] }]);
        cloneOf_ByFor_ArrayByNative(new Set());
        cloneOf_ByFor_ArrayByNative(new Map());
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
