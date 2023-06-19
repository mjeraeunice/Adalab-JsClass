let num=5
function add(num,callback){
    // console.log(num);
    // console.log({callback});
    callback(num);
}
function nums(num){
    console.log(num+30);
}
add(5,nums)