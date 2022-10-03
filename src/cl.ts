
class Post {

    id: number;
    title: string;

    constructor(id:number, title: string){
        this.id = id;
        this.title = title;
    }
     add = (a:number,b:number)=>{
        return a+b;
    }

}

// this is a subclass of post class..

class Category extends Post {

    catName: string;

    constructor(catName: string,id:number, title: string){
        super(id,title);
        this.catName = catName;
    }

}


const objPost = new Post(10,"First post title from a class");
console.log(objPost);

const results = objPost.add(10,55);
console.log(results);

// console.log(objPost.id = 10000);


const objCat = new Category("Food",454,"This is a title with category..");

console.log(objCat);

console.log(objCat.add(4,8));

console.log(objCat.id);

