let person={
    name:"Anne",
    age:25,
    introduce:function(){
        console.log("Hello")
console.log(`Hello my name is ${this.name} of ${this.age}`);    
    }
}
person.introduce()
person.greet=()=>{
    console.log(`How are you doing? ${person.name}`)
}
person.greet();