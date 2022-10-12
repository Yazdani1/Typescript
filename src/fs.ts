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


type subtrcution = (a:number,b:number,c:number)=>number;


const doSubtruction: subtrcution = (n1:number,n2:number,n3:number):number=>{

    return n1-n2;

}

// console.log("Subtraction:"+doSubtruction(50-10))




