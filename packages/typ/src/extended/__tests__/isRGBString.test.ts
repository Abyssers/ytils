/**
 * @jest-environment jsdom
 */

import { isRGBString } from "../isRGBString";

describe("isRGBString", () => {
    test.each([
        /* classic */
        ["rgb(0, 0, 0)", true],
        ["rgb(-0, +0, 0)", true],
        ["rgb(255, 255, 255)", true],
        ["rgb(-255, +255, 255)", true],
        ["rgb(-500, +500, 500)", true],
        ["rgb(-127.5, +127.5, 127.5)", true],
        ["rgb(-.5, +.5, .5)", true],
        ["rgb(-50%, +50%, 50%)", true],
        [" rgb(  0,   0,    0     )      ", true],
        [" rgb(  -0,   +0,    0     )      ", true],
        [" rgb(  255,   255,    255     )      ", true],
        [" rgb(  -255,   +255,    255     )      ", true],
        [" rgb(  -500,   +500,    500     )      ", true],
        [" rgb(  -127.5,   +127.5,    127.5     )      ", true],
        [" rgb(  -.5,   +.5,    .5     )      ", true],
        [" rgb(  -50%,   +50%,    50%     )      ", true],
        /* splited by space */
        ["rgb(0 0 0)", true],
        ["rgb(-0 +0 0)", true],
        ["rgb(255 255 255)", true],
        ["rgb(-255 +255 255)", true],
        ["rgb(-500 +500 500)", true],
        ["rgb(-127.5 +127.5 127.5)", true],
        ["rgb(-.5 +.5 .5)", true],
        ["rgb(-50% +50% 50%)", true],
        [" rgb(  0   0    0     )      ", true],
        [" rgb(  -0   +0    0     )      ", true],
        [" rgb(  255   255    255     )      ", true],
        [" rgb(  -255   +255    255     )      ", true],
        [" rgb(  -500   +500    500     )      ", true],
        [" rgb(  -127.5   +127.5    127.5     )      ", true],
        [" rgb(  -.5   +.5    .5     )      ", true],
        [" rgb(  -50%   +50%    50%     )      ", true],
        /* unmatched */
        ["rgb(0,  , 127.5)", false],
        ["rgb(0     127.5)", false],
        ["rgb(-5., +5., 5.)", false],
        ["rgb(-5.  +5.  5.)", false],
        ["rgb(-50.5%, +50.5%, 50.5)", false],
        ["rgb(-50.5%  +50.5%  50.5)", false],
        ["rgb", false],
        ["rgb(", false],
        ["rgb()", false],
        ["rgb(0)", false],
        ["rgb(255)", false],
        ["rgb(0, 255)", false],
        ["rgb(127.5, 127.5)", false],
    ])('string literal: "%s"', (value, expected) => {
        /**
         * jsdom doesn't support rgb string that whose r, g and b are splited by blank space!
         * @test
         * const ref = "rgb(1, 2, 3)"; // as a reference standard for detection (not be included in test cases)
         * document.body.style.color = ref;
         * document.body.style.color = value;
         * expect(isRGBString(value)).toBe(getComputedStyle(document.body).color !== ref);
         */
        expect(isRGBString(value)).toBe(expected);
    });
});
