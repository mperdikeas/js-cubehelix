'use strict'; 
require('source-map-support').install();

import {assert}          from 'chai';
import AssertionError    from 'assertion-error';
assert.isOk(AssertionError);
import           _ from 'lodash';
assert.isOk(_);

import {add, multiply, scalarMul, display}  from '../src/matrix.js';

describe('add tests', function() {
    it('test 1', function() {
        const a = [[1,2],[3,4]];
        const b = [[5,6],[7,8]];
        const result = display(add(a, b));
        const expected = `6 8
10 12`;
        assert.strictEqual(result, expected);
    });
});

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


describe('scalarMul tests', function() {
    it('test 1', function() {
        const a = 2;
        const matrix = [[8, 3], [2, 4], [3, 6]];

        const result = display(scalarMul(a, matrix));
        const expected = `16 6
4 8
6 12`;

        assert.strictEqual(result, expected);
    });


});



