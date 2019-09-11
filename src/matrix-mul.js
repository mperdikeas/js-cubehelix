'use strict';


function multiply(a, b) {
    const aNumRows = a.length, aNumCols = a[0].length;
    const bNumRows = b.length, bNumCols = b[0].length;
    const m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return m;
}

function scalarMul(a, matrix) {
    const aNumRows = matrix.length;
    const aNumCols = matrix[0].length;
    const m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(aNumCols); // initialize the current row
        for (var c = 0; c < aNumCols; ++c) {
            m[r][c] = a*matrix[r][c];
        }
    }
    return m;
}

function display(m) {
    var rv = [];
    for (var r = 0; r < m.length; ++r) {
        rv.push(m[r].join(' '));
    }
    return rv.join('\n');
}

exports.multiply = multiply;
exports.scalarMul = scalarMul;
exports.display = display;
