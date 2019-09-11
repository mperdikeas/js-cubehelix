'use strict'; 
require('source-map-support').install();

import {assert}          from 'chai';
import AssertionError    from 'assertion-error';
assert.isOk(AssertionError);
import           _ from 'lodash';
assert.isOk(_);

import {multiply, display}  from '../src/matrix-mul.js';

describe('multiply tests', function() {
    it('test 1', function() {
        var a = [[8, 3], [2, 4], [3, 6]],
            b = [[1, 2, 3], [4, 6, 8]];
        const result = display(multiply(a, b));
        const expected = `20 34 48
18 28 38
27 42 57`;

        assert.strictEqual(result, expected);
    });
    it('test 2', function() {
        var a = [[1, 0], [0, 1]];
        var b = [[42], [234]];
        const result = display(multiply(a, b));
        const expected = `42
234`;
        assert.strictEqual(result, expected);
    });

    it('test 3', function() {
        var a = [[2, 1], [3, -1]];
        var b = [[4], [5]];
        const result = display(multiply(a, b));
        const expected = `13
7`;
        assert.strictEqual(result, expected);
    });


});



