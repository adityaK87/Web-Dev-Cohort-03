"use strict";
function greet(name) {
    console.log("Hello ", name);
}
greet("Aditya");
function sum(a, b) {
    return a + b;
}
let ans = sum(1.7, 2);
console.log(ans);
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
let isAdult = isLegal(26);
console.log(isAdult);
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("Hello");
});
