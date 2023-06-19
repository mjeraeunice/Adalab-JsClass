let add=()=>{
    let num=20;
    console.log({num});
    let subtract=()=>{//if we return child function it will remember what the parent had.
return 30 - num;
    }
    return subtract
};
let nums=add()
console.log({nums});
console.log(nums());
