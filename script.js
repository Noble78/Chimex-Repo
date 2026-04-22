// let vname = prompt("Enter your name:");
// let age = prompt("Enter your age:");

// if (age >= 18) {
//     alert("Welcome " + vname + "! You are eligible to vote.");
// }   else {
//     alert("Sorry " + vname + ", you are not eligible to vote.");
// }
// if (age >= 18) {
//     alert(`Welcome ${vname}! You are eligible to vote.`);
// }else if (age <= 85) {
//     alert(`Sorry ${vname}, you are not eligible to vote.`);
// }   else {
//     alert(`Sorry ${vname}, you are not eligible to vote.`);
// }
// let vname = document.getElementById("name").value;
// let age = document.getElementById("age").value;
// const checkEligibility = (age, vname) => {
//     return age >= 18 ? alert(`Welcome ${vname}! You are eligible to vote.`) : alert(`Sorry ${vname}, you are not eligible to vote.`);
// }

// switch (age >= 18 && age <= 85) {
//     case true:
//         alert(`Welcome ${vname}! You are eligible to vote.`);
//         break;
//     case false:
//         alert(`Sorry ${vname}, you are not eligible to vote.`);
//         break;
//     default:
//         alert(`Sorry ${vname}, you are not eligible to vote.`);
// }
// switch (age) {
//     case age >= 18 && age <= 85:
//         alert(`Welcome ${vname}! You are eligible to vote.`);
//         break;

//     default:
//         alert(`Sorry ${vname}, you are not eligible to vote.`);
// }

// age >= 18 ? alert(`Welcome ${vname}! You are eligible to vote.`) : alert(`Sorry ${vname}, you are not eligible to vote.`);
//LOOPS
//  let numOfStudents = 10
//  let i
//  // i is seen as counter variable, it is used to keep track of the number of iterations in the loop
//     for (let i = 0; i <= numOfStudents; i+=2) {
//         console.log(i);
//     }
//  let i = 0;
//  while(i<numOfStudents) {
//      console.log(i);
//      i++;
//  }
// DO WHILE LOOP
// do{
//     console.log(i);
// } 
// while(i <= numOfStudents);
//ARRAYS
// const myArray = [1,2,3,4,5,6,7,8,9,10];

//  console.log(myArray[0]);
// console.log ( myArray[myArray.length-1]);
// array is a data structure that can hold multiple values of different data types
// mutation is the process of changing the value of an element in an array
// the index value of the last item of an array is usually i<the size of the array - 1
// myArray[0] = 100;
// console.log(myArray);
// myArray.unshift(0); // method is used to add an element to the beginning of an array
// myArray.push(11); // method is used to add an element to the end of an array
// myArray.pop(); // method is used to remove the last element of an array
// myArray.shift(); // method is used to remove the first element of an array
// console.log(myArray);
// ARRAY METHODS
// these are basically methods used for manipulating arrays, 
// and they accept callback functions as arguments
// myArray.reduce((a, acc)=> a + acc, 0); // method is used to reduce an array to a single value by applying a function to each element of the array
// accumulator is the value that is returned by the function after each iteration,
//  and it is used to keep track of the accumulated value
// higher order methods are those methods that accept callback function as arguments
// a callback function is a function that is passed as an argument to another function
//  and is executed after the outer function has completed its execution 
// callback functions are usually anonymous functions
// myArray.splice(3, 1); // method is used to delete an element from an array, it does not change the length of the array
// console.log(myArray);
// console.log(myArray.map((a)=> a * 2)); // method is used to create a new array by applying a function to each element of the array
// const dimension = [[1,2,3] , [4,5,6] , [7,8,9]];
// console.log(dimension.flat()); // method is used to flatten an array of arrays into a single array
// function areaOfCircle(radius) {
//     return Math.PI * radius * radius;
// }
//  function areaOfCircle(){
//  let radius = prompt("Enter the radius of the circle:");
//   alert (3.14 * radius * radius);
//  }
// areaOfCircle();
// JAVASCRIPT DATE OBJECT
//  const date = new Date();
//  console.log(date);
//  console.log(date.getFullYear());
//  console.log(date.getMonth());
//  console.log(date.getDate());
//  console.log( date.getFullYear() - (2005));

// let setTime = setInterval(() => {
//     console.log("Hello World");
// }, 1000);

// setTimeout(() => {
//     console.log("Hello World");
// }, 1000);   
// let nn = Number("234.344555665") 

// console.log(nn. toFixed(2)); // method is used to round a number to a specified number of decimal places
// console.log(typeof nn); // method is used to check the data type of a variable

// const mm = Math();
// console.log(mm.PI); // method is used to return the value of PI

// function radius(radius) {
//    radius = Math.PI * radius * radius;
//    console.log(radius.toFixed(2));
// }
// radius(4)

// console.log(Math.E); // method is used to return the value of Euler's number
// console.log(Math.sqrt(16)); // method is used to return the square root of a number
// console.log(Math.abs(-5)); // method is used to return the absolute value of a number
// console.log(Math.pow(2, 3)); // method is used to return the value of a number raised to the power of another number
// console.log(Math.round(4.5)); // method is used to round a number to the nearest integer
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.random()); // method is used to return a random number between 0 and 1
// console.log(Math.acos(1)); // method is used to return the arccosine of a number
// console.log(Math.asin(1)); // method is used to return the arcsine of a number
// console.log(Math.atan(1)); // method is used to return the arctangent of a number
// console.log(Math.random() * 100); // method is used to return a random number between 0 and 100
// const Imax = [2,9,3,5,7,1];
// console.log(Math.max(...Imax)); // method is used to return the largest number in an array
// // the three dots is called the spread operator, it is used to spread the elements of an array into individual arguments
// console.log(Math.min(...Imax)); // method is used to return the smallest number in an 
// console.log(Math.log10(100)); // method is used to return the natural logarithm of a number
// console.log(Math.log2(8)); // method is used to return the base 2 logarithm of a number
// console.log(Math.log(10)); // method is used to return the natural logarithm of a number
// STRING METHODS
// let str = "Hello World";
// console.log(str.length); // method is used to return the length of a string
// object constructor function is a function that is used to create an object, it is called a constructor because it constructs an object
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     bio() {
//         return `My name is ${this.name} and I am ${this.age} years old.`;
//     }
// }
// console.log(this)
//constructor is a special method that is called when an object is created, it is used to initialize the properties of an object
// this keyword is used to refer to the current object, it is used to access the properties and methods of an object
// class is a blueprint for creating objects, it is a template for creating objects, it defines the properties and methods of an object
// OOP METHODS
// encapsulation is the process of hiding the internal details of an object and only exposing the necessary details to the outside world
// inheritance is the process of creating a new class that is a child of an existing class, it allows the child class to inherit the properties and methods of the parent class
// polymorphism is the ability of an object to take on many forms, it allows a single function to be used for different types of objects
// abstraction is the process of hiding the complexity of an object and only exposing the necessary details to the outside world
// class Me extends Person {
//     constructor(name, age, gender) {
//         super(name, age);
//         this.gender = gender;
//     }
//         bio() {
//         return `My name is ${this.name} and I am ${this.age} years old. I am a ${this.gender}.`;
//     }
// }
// const me = new Me("John", 20, "male");
// console.log(me.bio());

// const  person = {
//     name:"soki ",
//     age: 20,
//     gender:"male",
//     bio() {
//         return `My name is ${this.name} and I am ${this.age} years old. I am a ${this.gender}.`;
//     }
// }
// console.log(person.bio());
// let age = prompt("Enter your age:");
// let vote = (age >= 18) ? "you are eligible" : "you are not eligible";
// console.log(vote);
// template literals are a way to embed expressions in strings, they are enclosed in backticks (`) and the expressions are enclosed in ${}
// class Object {
//     constructor(name, age,address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     myObject(){
//         return  `my name is ${this.name} and I am ${this.age} years old. I live in ${this.address}`;
//     }
// }
// const myObject = new Object("John", 20, "Lagos");
// console.log(myObject.myObject());

// class person extends Object {
//     constructor(name, age, address, gender,nationality) {
//         this.nationality = nationality
//         this.gender =  gender 
//      super(name , age, address);
//     }
   
//     myPerson() {
//         return `my name is ${this.name} and I am ${this.age} years old. I live in ${this.address}. I am a ${this.gender} from ${this.nationality}.`;
//     }
// }
// const myPerson = new person("John", 20, "Lagos", "  male ", "Nigerian");
// console.log(myPerson.myPerson());

// let url = "https://jsonplaceholder.typicode.com/posts/";
// async function fetchData() {
//     let response = await fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))

//     console.log(response, "this is the response");
// }
// fetchData(),
//Async call means that the function will return a promise, and the await keyword is used to wait for the promise to resolve before moving on to the next line of code.
// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
// It is used to handle asynchronous operations in JavaScript, and it allows us to write asynchronous code in a more synchronous way.   
// Exceptions are errors that occur during the execution of a program, and they can be handled using try...catch statements. The try block contains the code that may throw an exception, 
// and the catch block contains the code that will handle the exception if it occurs. The finally block contains code that will be executed regardless of whether an exception was thrown or not.
// Promise has three possible states: pending, fulfilled, and rejected. 
// Pending means that the promise is still in the process of being resolved, fulfilled means that the promise has been resolved successfully, and rejected means that the promise has been resolved with an error.
// json stands for  javascript object notation,
//  it is a lightweight data interchange format that is easy for humans to read and write, 
// and easy for machines to parse and generate. It is often used to exchange data between a server and a web application, and it is also used to store data in a structured format.
// jS EVENTS
// an event is an action that occurs in the browser, and it can be triggered by the user or by the browser itself.
// event listeners are functions that are called when an event occurs, and they are used to handle events in JavaScript. 
// They can be added to an element using the addEventListener() method, and they can be removed using the removeEventListener() method.