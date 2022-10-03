"use strict";
class Post {
    constructor(id, title) {
        this.add = (a, b) => {
            return a + b;
        };
        this.id = id;
        this.title = title;
    }
}
// this is a subclass of post class..
class Category extends Post {
    constructor(catName, id, title) {
        super(id, title);
        this.catName = catName;
    }
}
const objPost = new Post(10, "First post title from a class");
console.log(objPost);
const results = objPost.add(10, 55);
console.log(results);
// console.log(objPost.id = 10000);
const objCat = new Category("Food", 454, "This is a title with category..");
console.log(objCat);
console.log(objCat.add(4, 8));
console.log(objCat.id);
