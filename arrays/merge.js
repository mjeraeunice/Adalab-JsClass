function divideArray(arr){
    if(arr.length<=1){
        return arr;
    }
let middle= Math.floor(arr.length/2);
let left=arr.slice(0,middle);
let right=arr.slice(middle);
console.log([left]);
console.log({right});
 return sortedArray(divideArray(left),divideArray(right));
}
function sortedArray(left,right){
    console.log("hey i am here")
    let emptyArray= [];
    console.log("empty2",emptyArray)
    console.log("left2",left)
    console.log("rigth2",right)
    while(left.length &&right.length){
        if(left[0]<right[0]){
            emptyArray.push(left.shift());
        }
        else{
            emptyArray.push(right.shift());
        }
    }
    console.log({emptyArray});
    return[...emptyArray,...left,...right];
}
let arr=[3,10,2,50,1,4,6];
console.log(divideArray(arr));