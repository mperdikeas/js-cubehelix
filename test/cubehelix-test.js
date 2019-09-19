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
    it('example in README', function() {

        var mappingFunction = cubehelix(); // default start, rotations, hue and gamma are assumed
        var rgb = mappingFunction(0.5); /* get the RGB values (scaled in the [0, 1] range) for a
                                         * value with intensity 0.5 (0 the lowest, 1 being the highest)
                                         */
        // generate a mapping function with a helix configuration different than the default
        mappingFunction = cubehelix({start: 0.75, r:-0.5, hue:0.8, gamma:2.0});

    });
});



