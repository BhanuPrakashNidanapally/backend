"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputLines = [];

rl.on("line", (input) => {
    inputLines.push(input);
});

rl.on("close", () => {
    main();
});

let index = 0;
const readLine = () => {
    return inputLines[index++]
}

function main() {
    let n = parseInt(readLine());

    let sum = 0;
    while (n--) {
        sum += parseInt(readLine());
    }

    console.log(sum)
}