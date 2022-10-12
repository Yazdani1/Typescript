"use strict";
let number = [10, 45, 25, 36, 99, 9, 45, 1, 2, 4, 5, 6];
number.push(10000);
console.log(number);
// to show mix array
const mix = ["name", 10, 25, 65, 98, 7, 8, "YAZ", false];
mix.push(45);
// mixed type
const mixed = ["Jonson", 10, 45, 8, 9, 6, false];
console.log(mixed);
for (let result of mixed) {
    console.log(result);
}
const listItem = [45, 10, 45, 8, 9, 6, 89, 78, 9, 6, 5, 6, 5, 5];
for (let i of listItem) {
    console.log("List resutl is here:" + i);
}
const namelIST = ["Jon", "Doe", "Mikle"];
for (let n of namelIST) {
    console.log(n);
}
const studetnlist = ["Jon", "Doe", "Mikle"];
for (let i in studetnlist) {
    console.log(i);
}
const val = [10, 4, 5, 6, 9, 6, 5, 5];
for (let i = 0; i <= 100; i++) {
    console.log(i);
}
