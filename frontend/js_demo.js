/*//readline module to take input from user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Your Name: ', (input) => {
    console.log(`Your Name is : ${input}`);
    rl.close();
});


//sum of two integers
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first integer: ', (num1) => {
    rl.question('Enter second integer: ', (num2) => {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        console.log(`First Integer: ${num1}`);
        console.log(`Second Integer: ${num2}`);
        console.log(`Sum: ${num1 + num2}`);

        rl.close();
    });
});


//greater of two numbers
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(a) {
    rl.question("Enter second number: ", function(b) {

        a = Number(a);
        b = Number(b);

        if (a > b) {
            console.log(a + " is greater than " + b);
        } else {
            console.log(b + " is greater than " + a);
        }

        rl.close();
    });
});


//voting eligibility
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", function(name) {
    rl.question("Enter your age: ", function(age) {

        age = Number(age);

        if (age >= 18) {
            console.log(name + ", You are eligible to vote.");
        } else {
            console.log(name + ", You are not eligible to vote.");
        }

        rl.close();
    });
});


//difference between greatest and smallest of three numbers
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter three numbers: ", function(input) {

    let numbers = input.split(" ").map(Number);

    let max = Math.max(numbers[0], numbers[1], numbers[2]);
    let min = Math.min(numbers[0], numbers[1], numbers[2]);

    console.log(max - min);

    rl.close();
});


//two sum problem
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let count = 0;

rl.on("line", (line) => {

    input.push(line);
    count++;

    if (count === 3) {

        let n = Number(input[0]);

        let nums = input[1].split(" ").map(Number);

        let target = Number(input[2]);

        let found = false;

        for (let i = 0; i < n; i++) {

            for (let j = i + 1; j < n; j++) {

                if (nums[i] + nums[j] === target) {

                    console.log(i + " " + j);

                    found = true;
                    break;
                }
            }

            if (found) {
                break;
            }
        }

        if (!found) {
            console.log(-1);
        }

        rl.close();
    }

});*/


//equilibrium index of an array
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let count = 0;

rl.on("line", (line) => {

    input.push(line);
    count++;

    if (count === 2) {

        let n = Number(input[0]);

        let arr = input[1].split(" ").map(Number);

        let totalSum = 0;

        for (let i = 0; i < n; i++) {
            totalSum += arr[i];
        }

        let leftSum = 0;
        let found = false;

        for (let i = 0; i < n; i++) {

            let rightSum = totalSum - leftSum - arr[i];

            if (leftSum === rightSum) {
                console.log(i);
                found = true;
                break;
            }

            leftSum += arr[i];
        }

        if (!found) {
            console.log(-1);
        }

        rl.close();
    }

});