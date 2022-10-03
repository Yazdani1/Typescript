"use strict";
const newPost = (post) => {
    var result = (post.postTitle + post.postDes + post.userId + post.postImg);
    console.log(result);
};
newPost({ postTitle: "First post", postDes: "Description details", postImg: "Image url this is..", userId: 50 });
