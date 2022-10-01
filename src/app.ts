// let sid: number = 100;

// let Name: string = "Jonson";

// let age: number = 20;

// let color: string | number | boolean;





// Name = "hkhh";

// let a:any = "Hello"

// console.log(a);
// console.log(Name);
// console.log(sid+1);

// //Union

// let paid: string | number;

// paid = "Hello Union";

// console.log("Union Paid Number"+paid);

// //Functions

// function amount(x:number,y:number):number{

//     return (x+y);

// }

// //Functions union

// const place=(color: number, age:number):number=>{

//     return (color+age)

// }

// const result = place(20,56);

// console.log("Total result is here for arrow function is:"+result)

// const add = (a:number, b:number,isLogedin?:boolean)=>{

//     console.log("Total addition is: "+a+b);

// }

// add(10,9);

// //interfate

// interface User {
//     name: string,
//     age?: number,
//     email: string,
//     password: string | number
// }

// const UserRegistration = (info:User)=>{

//     console.log("User name is:"+ info.name, "Age is:"+info.age, "E-mail is:"+info.email+"Password is:"+info.password );

// }

// UserRegistration({
//     name: "Yazdani",
//     age: 30,
//     email: "yaz@gmail.com",
//     password: "123456987"
// })

// UserRegistration({
//     name: "Dani",
//     age: 20,
//     email: "dani@gmail.com",
//     password: 123456987
// })

// UserRegistration({
//     name: "Shaon",
//     email: "shaon@gmail.com",
//     password: "123456987"
// })

// //Type

// type proid=string | number;

// var proid = "I am a variable from type of typescript";


// console.log(proid);


// //Enum
// enum Directions {
//     left,
//     right,
//     up,
//     down,
// }

// console.log("Result from enum"+ Directions.right);

// enum Direction2 {

//     left = 1,
//     right = 2,
    
// }

// console.log("Enum with value"+ Direction2.left);

// enum Direction3 {

//     start = "start",
//     process = "process",
//     done = "done"

// }


// console.log("Enum value with string type:"+Direction3.process)



// console.log("Total count" +amount(10,50))
// console.log("Total count" +amount(150,87))

interface IBase {
    id?: string | number,
    name?: string,
    image?: string
}

interface Post extends IBase{
    title: string,
    des?: string,
    comment?: string
}

const PostDetails = (postDetails: Post)=>{

    console.log("Post title is:"+postDetails.title,postDetails.des,postDetails.id);

}

PostDetails({title:"First post is here",des:"This is a first description",id:10})

var a: number = 10;

// console.log("Numbr is here:"+a);


enum Status {
    done = "done",
    process = "process",
    started = "started",
    panding = "panding"
}
if(Status.process==="process"){
    console.log("Its matching")

}else{
    console.log("Not matching")
}

const firstFunction = (a:number,b:number)=>{
    console.log("Learning function..."+(a+b));
}

firstFunction(10,20);

// function second(){
//     console.log("This is a second function..")
// }

// second();

const secondFunction = ()=>{

    
}









