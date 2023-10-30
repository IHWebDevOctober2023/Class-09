// It's not possible to delete a method from a class with the delete nameOftheObject.method
class User{
    constructor(){
        this.name = "Marcel"
    }
    sayHi(){
        console.log(`Hi ${this.name}`);
    }
}

// it's only possible when qwe create an object directly
 const obj = {
    name: "Marcel",
    sayHi: function(){
        console.log(`Hi ${this.name}`);
    }
}


// const obj = new User;

delete obj.sayHi
// JSON stands for JavaScript Object Notation lightweight data.interchange format. 

// It's easy for humans to read and write. And it's also easy for machines to parse and generate. 

console.log("JS WORKING!");

fetch("/04-json-example.json")
    .then((response)=> response.json())
    // .then((jsonData)=> console.log(jsonData))

const newObject = {
    name: "Paco",
    role: "Data Teacher",
    age: 6
};

// console.log(JSON.stringify(newObject));

const stringResponse = '{"name":"Paco","role":"Data Teacher","age":6}'

console.log(JSON.parse(stringResponse));