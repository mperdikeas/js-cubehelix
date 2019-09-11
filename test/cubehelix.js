'use strict'; 
require('source-map-support').install();

import {assert}          from 'chai';
import AssertionError    from 'assertion-error';
assert.isOk(AssertionError);
import           _ from 'lodash';
assert.isOk(_);

import {cubehelix}  from '../src/cubehelix.js';

describe('cubehelix silly test', function() {
    it('does not break', function() {
        cubehelix();
        assert.strictEqual(42, 42);
    });
});



