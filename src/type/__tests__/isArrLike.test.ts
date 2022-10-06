/**
 * @jest-environment jsdom
 */

import { isArrLike } from "../isArrLike";

describe("isArrLike", () => {
    test("object of Array", () => {
        expect(isArrLike([])).toBeTruthy();
        expect(isArrLike([6])).toBeTruthy();
        expect(isArrLike(["6"])).toBeTruthy();
        expect(isArrLike(new Array(6))).toBeTruthy();
    });

    test("array-like", () => {
        expect(isArrLike("666")).toBeTruthy();
        expect(isArrLike(new String("666"))).toBeTruthy();
        (function () {
            /* eslint-disable-next-line prefer-rest-params */
            expect(isArrLike(arguments)).toBeTruthy(); // Arguments
        })();
        expect(isArrLike(document.styleSheets)).toBeTruthy(); // StyleSheetList
        expect(isArrLike(document.getElementsByTagName("body"))).toBeTruthy(); // HTMLCollection
        expect(isArrLike(document.body.childNodes)).toBeTruthy(); // NodeList
        expect(isArrLike(document.body.classList)).toBeTruthy(); // DOMTokenList
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        expect(isArrLike(fileInput.files)).toBeTruthy(); // FileList
    });

    test("other types", () => {
        expect(isArrLike(undefined)).toBeFalsy();
        expect(isArrLike(null)).toBeFalsy();
        expect(isArrLike(6)).toBeFalsy();
        expect(isArrLike(new Number(6.6))).toBeFalsy();
        expect(isArrLike(Symbol(6))).toBeFalsy();
        expect(isArrLike({})).toBeFalsy();
        expect(isArrLike(new Object())).toBeFalsy();
        expect(isArrLike(console.log)).toBeFalsy();
        expect(isArrLike(new RegExp("6"))).toBeFalsy();
        expect(isArrLike(new Map())).toBeFalsy();
        expect(isArrLike(new WeakMap())).toBeFalsy();
        expect(isArrLike(new Set())).toBeFalsy();
        expect(isArrLike(new WeakSet())).toBeFalsy();
    });
});
