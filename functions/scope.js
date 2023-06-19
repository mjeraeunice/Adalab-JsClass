let a=20;//is a global variable
function add(b){ 
    console.log(a+b); 
    console.log({a});  
    let c=30;
    console.log(a +b +c)
    a=60;
}
add(20);
console.log("a2",a);
// console.log(c);

function multiply(c){
    console.log(a*c);
}
multiply(3)
function greet(){
    let hello="Hi"
    function talk(){
        let greeting="hey there";
        console.log(`${hello} ${greeting}`);
        console.log({greeting})
    }
    talk() 
}
greet()
