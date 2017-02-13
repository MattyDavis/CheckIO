"use strict";

function xoReferee(data) {
    let array = [];
    let size = data.length;
    let result = "D";
    for (let string of data) array.push(string.split("")); // string lines -> array

    function isWin(symbol) {
        for (let i in data) {
            let verticalSum = 0, horizontalSum = 0, crossSumLeft = 0, crossSumRight = 0;
            for (let j in data) {
                if (array[i][j] == symbol) verticalSum++;
                if (array[j][i] == symbol) horizontalSum++;
                if (array[j][j] == symbol) crossSumLeft++;
                if (array[j][(size - 1) - j] == symbol) crossSumRight++;
            }
            if ((verticalSum == size) || (horizontalSum == size) || (crossSumLeft == size)|| (crossSumRight == size)) return true;
        }
    }

    if (isWin("X")) result = "X";
    else if (isWin("O")) result = "O";
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(xoReferee([
        "X.O",
        "XX.",
        "XOO"]), "X", "Xs wins");

    assert.equal(xoReferee([
        "OO.",
        "XOX",
        "XOX"]), "O", "Os wins");

    assert.equal(xoReferee([
        "OOX",
        "XXO",
        "OXX"]), "D", "Draw");

    assert.equal(xoReferee([
        "O.X",
        "XX.",
        "XOO"]), "X", "Xs wins again");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
