"use strict";

function countNeighbours(data, row, col) {
    let count = 0, index = [-1, 0, 1];
    for (let i of index)
        for (let j of index) {
            let x = row + i, y = col + j;
            if ((x > -1) && (y > -1) && data[x] !== undefined)
                if ((data[x][y] == 1) && !((row == x) && (col == y))) count++;
        }
    return count;
}

var assert = require('assert');

if (!global.is_checking) {

    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");

    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");

    assert.equal(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2), 3, "Dense corner");

    assert.equal(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1), 0, "Single");


    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
