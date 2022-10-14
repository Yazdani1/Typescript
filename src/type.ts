
type NewPost = {

    title: string,
    des: string,
    price: number,

}


const createPost = (post:NewPost)=>{

    console.log("Type result is:"+post.title+post.des+post.price)

}

createPost({title:"Post tuitle from Type",des:"New psot description",price:10});


type postColor = string | number | boolean;


const value:postColor = "Learning new text from here..";

console.log(value);


var rs = false;

console.log(typeof(rs)); // to check the type of a variable


// type unknown

let k: unknown;


k = false;
k = "This is a test"
k = 10;
console.log(k)


type value =  number | string;


const jobPost = (a: value, b: value)=>{

    if(typeof a === "number" && typeof b === "number"){
        const result = a+b;
        console.log("Type result is:"+result);
    }else{
        console.log(a,b);
    }

}

jobPost(7,45);
console.log(jobPost("fff","dfdd"));


type info = number | string | boolean;


const infoDetails = (name:info,active:info)=>{

    var result = name;
    var testActive = active;

    console.log(result,testActive);


}


























