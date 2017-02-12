"use strict";

function mostWanted(data) {
    let array = [];
    data.toLowerCase().match(/[a-z]/g).sort().map(i => array[i] = !array[i] ? 1 : array[i] + 1 );

    let result = Object.keys(array)[0];
    for (let key in array)
        if (array[key] > array[result]) result = key;

    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
