let userDetails=True;

let promise=new Promise(function(resolve,reject){
 if(userDetails){
    setTimeout(()=>{resolve('user details available')},5000)
 }
 else{
setTimeout(()=>{reject('No user details')},5000)
 }
});
let add=()=>{
    console.log(20+30);
}
add()

const getUserDetails=async()=>{
    let response=await promise;
    // console.log({response});z
}
getUserDetails();
