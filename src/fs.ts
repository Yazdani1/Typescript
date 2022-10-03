// function signature...

let add: (a:number,b:number)=>number;

type addValue = (a:number,b:string)=>void;


add = (n1: number,n2: number,)=>{
    return n1+n2
}


const newAddition:addValue = (num1:number,num2:string)=>{

    return num1+num2;

}

console.log(add(5,55));
console.log("New Result is here:"+newAddition(89,"55"));

