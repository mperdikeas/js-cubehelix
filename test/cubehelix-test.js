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
        const l = cubehelix();
        for (let x = 0; x < 1; x+=0.01)
            l(x);
    });
});



