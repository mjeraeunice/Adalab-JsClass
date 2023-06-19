let partyPeople=()=>{
    console.log('I am showering');
}
let partyDriver=()=>{
    console.log('You will find us when you are done');
};
partyPeople()
setTimeout(partyDriver,3000)
clearInterval(partyPeople,2000)