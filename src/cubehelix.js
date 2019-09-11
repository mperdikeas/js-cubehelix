'use strict';


import {multiply, scalarMul, display}  from './matrix-mul.js';

function cubehelix(start, rotations, hue, gamma) {


    return function (l) {

        const phi = 2*Math.PI*(start/3 + rotations*l);
        const alpha = hue*Math.pow(l, gamma)*(1 - Math.pow(l, gamma))/2;
        
        return l;

    };




}

exports.cubehelix = cubehelix;

