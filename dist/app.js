"use strict";
// let sid: number = 100;
const PostDetails = (postDetails) => {
    console.log("Post title is:" + postDetails.title, postDetails.des, postDetails.id);
};
PostDetails({ title: "First post is here", des: "This is a first description", id: 10 });
var a = 10;
// console.log("Numbr is here:"+a);
var Status;
(function (Status) {
    Status["done"] = "done";
    Status["process"] = "process";
    Status["started"] = "started";
    Status["panding"] = "panding";
})(Status || (Status = {}));
if (Status.process === "process") {
    console.log("Its matching");
}
else {
    console.log("Not matching");
}
const firstFunction = (a, b) => {
    console.log("Learning function..." + (a + b));
};
firstFunction(10, 20);
// function second(){
//     console.log("This is a second function..")
// }
// second();
const secondFunction = () => {
};
