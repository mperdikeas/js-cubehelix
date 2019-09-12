'use strict';


import {add, multiply, scalarMul, display}  from './matrix.js';

function cubehelix(options = {start: 0.5, r:-1.5, hue:1.2, gamma:1.0}) {

    const start = options.start;
    const r = options.r;
    const hue = options.hue;
    const gamma = options.gamma;

    return function (l) {

        if ((l<0) || (l>1))
            throw new Error(`l must be in [0, 1] (was: ${l})`);
        const phi = 2*Math.PI*(start/3 + r*l);
        const alpha = hue*Math.pow(l, gamma)*(1 - Math.pow(l, gamma))/2;
        const rgb = add([[Math.pow(l, gamma)],[Math.pow(l, gamma)],[Math.pow(l, gamma)]]
                        , scalarMul(alpha
                                    , multiply([[-0.14861, 1.78277], [-0.29227, -0.90649], [1.97294, 0]]
                                               , [[Math.cos(phi)], [Math.sin(phi)]])));
        return {r: rgb[0], g: rgb[1], b: rgb[2]};


    };

}

exports.cubehelix = cubehelix;

