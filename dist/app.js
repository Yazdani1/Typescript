"use strict";
// let sid: number = 100;
const PostDetails = (postDetails) => {
    console.log("Post title is:" + postDetails.title, postDetails.des);
};
PostDetails({
    title: "First post is here",
    des: "This is a first description",
});
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
// list
const list = [10, 20, 50, 6, 588, 996, 54, 25, 3, 5, 65, 45, 96];
for (var resultval of list) {
    console.log(resultval);
}
