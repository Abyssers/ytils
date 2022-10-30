/**
 * @jest-environment jsdom
 */

import { isArrayLike } from "../isArrayLike";

describe("isArrayLike", () => {
    test("object of Array", () => {
        expect(isArrayLike([])).toBeTruthy();
        expect(isArrayLike([6])).toBeTruthy();
        expect(isArrayLike(["6"])).toBeTruthy();
        expect(isArrayLike(new Array(6))).toBeTruthy();
    });

    test("array-like", () => {
        expect(isArrayLike("666")).toBeTruthy();
        expect(isArrayLike(new String("666"))).toBeTruthy();
        (function () {
            /* eslint-disable-next-line prefer-rest-params */
            expect(isArrayLike(arguments)).toBeTruthy(); // Arguments
        })();
        expect(isArrayLike(document.styleSheets)).toBeTruthy(); // StyleSheetList
        expect(isArrayLike(document.getElementsByTagName("body"))).toBeTruthy(); // HTMLCollection
        expect(isArrayLike(document.body.style)).toBeTruthy(); // CSSStyleDeclaration
        expect(isArrayLike(document.body.childNodes)).toBeTruthy(); // NodeList
        expect(isArrayLike(document.body.classList)).toBeTruthy(); // DOMTokenList
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        expect(isArrayLike(fileInput.files)).toBeTruthy(); // FileList
    });

    test("other types", () => {
        expect(isArrayLike(undefined)).toBeFalsy();
        expect(isArrayLike(null)).toBeFalsy();
        expect(isArrayLike(6)).toBeFalsy();
        expect(isArrayLike(new Number(6.6))).toBeFalsy();
        expect(isArrayLike(Symbol(6))).toBeFalsy();
        expect(isArrayLike({})).toBeFalsy();
        expect(isArrayLike(new Object())).toBeFalsy();
        expect(isArrayLike(console.log)).toBeFalsy();
        expect(isArrayLike(new RegExp("6"))).toBeFalsy();
        expect(isArrayLike(new Map())).toBeFalsy();
        expect(isArrayLike(new WeakMap())).toBeFalsy();
        expect(isArrayLike(new Set())).toBeFalsy();
        expect(isArrayLike(new WeakSet())).toBeFalsy();
    });
});
