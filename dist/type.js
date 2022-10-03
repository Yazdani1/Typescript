"use strict";
const createPost = (post) => {
    console.log("Type result is:" + post.title + post.des + post.price);
};
createPost({ title: "Post tuitle from Type", des: "New psot description", price: 10 });
const value = "Learning new text from here..";
console.log(value);
var rs = false;
console.log(typeof (rs)); // to check the type of a variable
// type unknown
let k;
k = false;
k = "This is a test";
k = 10;
console.log(k);
const jobPost = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        const result = a + b;
        console.log("Type result is:" + result);
    }
    else {
        console.log(a, b);
    }
};
jobPost(7, 45);
console.log(jobPost("fff", "dfdd"));
