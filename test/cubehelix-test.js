'use strict'; 
require('source-map-support').install();

import {assert}          from 'chai';
import AssertionError    from 'assertion-error';
assert.isOk(AssertionError);
import           _ from 'lodash';
assert.isOk(_);

import {cubehelix, defaultHelixConfig}  from '../src/cubehelix.js';

describe('cubehelix silly test', function() {
    it('does not break', function() {
        const l = cubehelix();
        for (let x = 0; x < 1; x+=0.01)
            l(x);
    });
    it('example in README', function() {

    /*
     * Generate a mapping function with the default
     * helix configuration. I.e. default start, rotations,
     * hue and gamma are assumed
     */
    var mappingFunction = cubehelix();

    /*
     * Get the RGB values (scaled in the [0, 1] range) for a
     * value with intensity 0.5 (0 being the lowest, 1 the highest)
     */        
    var rgb = mappingFunction(0.5);

    /*
     * Generate a different mapping function by providing
     * a full helix configuration different than the default
     */
    mappingFunction = cubehelix({start: 0.75, r:-0.5, hue:0.8, gamma:2.0});

    /*
     * Alternatively, you may choose to provide only some of the configuration
     * parameters while keeping default values for the rest
     */
    mappingFunction = cubehelix({r:-0.5, gamma: 2.0});

    /*
     * NB: for many non-default helix configuration values the mapping
     * function may generate RGB components outside of the [0, 1] range
     * The client programmer is responsible for clipping to [0, 1].
     * The more clipping occurs, the more the monotonicity of perceived luminosity 
     * may suffer.
     */

    /*
     * Print the default helix configuration
     */
    console.log(JSON.stringify(defaultHelixConfig));


    });
    it('selective configuration works', function() {
        const modification = {r:2.0, gamma:2.0};
        const fullConfiguration = Object.assign({}, defaultHelixConfig, modification);
        var mappingFunctionA = cubehelix(fullConfiguration);
        var mappingFunctionB = cubehelix(modification);
        for (let v = 0; v <= 1; v+=0.01) {
            const mA = mappingFunctionA(v);
            const mB = mappingFunctionB(v);
            assert.strictEqual(JSON.stringify(mA), JSON.stringify(mB));
        }
    });
});



