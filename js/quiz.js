// const quizArr = [
//   {
//     id: 1,
//     question: "What is the correct way to write a JavaScript array?",
//     options: {
//       A: "var colors = 'red', 'green', 'blue';",
//       B: "var colors = ['red', 'green', 'blue']",
//       C: "var colors = (1:'red', 2:'green', 3:'blue');",
//       D: "var colors = 'red' + 'green' + 'blue';",
//     },
//     answer: "B",
//   },
//   {
//     id: 2,
//     question: "What is the correct way to write a JavaScript object?",
//     options: {
//       A: "var person = 'John', 'Doe', 25;",
//       B: "var person = ('John', 'Doe', 25);",
//       C: "var person = {firstName:'John', lastName:'Doe', age:25};",
//       D: "var person = 'firstName:John, lastName:Doe, age:25';",
//     },
//     answer: "C",
//   },
//   {
//     id: 3,
//     question: "How do you round the number 7.25, to the nearest integer?",
//     options: {
//       A: "Math.round(7.25)",
//       B: "round(7.25)",
//       C: "rnd(7.25)",
//       D: "math.rnd(7.25)",
//     },
//     answer: "A",
//   },
//   {
//     id: 4,
//     question: "How do you find the length of a string in JavaScript?",
//     options: {
//       A: "length(myString)",
//       B: "myString.length()",
//       C: "myString.length",
//       D: "str.length(myString)",
//     },
//     answer: "C",
//   },
//   {
//     id: 5,
//     question: "How do you create a function in JavaScript?",
//     options: {
//       A: "function:myFunction()",
//       B: "new.function(myFunction)",
//       C: "function myFunction()",
//       D: "create.function(myFunction)",
//     },
//     answer: "C",
//   },
//   {
//     id: 6,
//     question:
//       "What is the correct way to concatenate two strings in JavaScript?",
//     options: {
//       A: "myString1 + myString2",
//       B: "myString1.concat(myString2)",
//       C: "myString1 && myString2",
//       D: "myString1.join(myString2)",
//     },
//     answer: "A",
//   },
//   {
//     id: 7,
//     question: "What is the correct way to define a variable in JavaScript?",
//     options: {
//       A: "v myVariable = 'hello'",
//       B: "variable myVariable = 'hello'",
//       C: "var myVariable = 'hello'",
//       D: "let myVariable = 'hello'",
//     },
//     answer: "C",
//   },
//   {
//     id: 8,
//     question: "What is the correct way to create a loop in JavaScript?",
//     options: {
//       A: "for (i = 0; i < 5; i++)",
//       B: "for i = 1 to 5",
//       C: "while (i < 5)",
//       D: "loop i = 1 to 5",
//     },
//     answer: "A",
//   },
//   {
//     id: 9,
//     question:
//       "What is the correct way to declare a variable using the let keyword?",
//     options: {
//       A: "let myVariable = 'hello';",
//       B: "var myVariable = 'hello';",
//       C: "const myVariable = 'hello';",
//       D: "new myVariable = 'hello';",
//     },
//     answer: "A",
//   },
//   {
//     id: 10,
//     question: "What is the difference between let and var?",
//     options: {
//       A: "let and var are same",
//       B: "let has block scope and var has function scope",
//       C: "var has block scope and let has function scope",
//       D: "let is used to declare constant and var is used to declare variable",
//     },
//     answer: "B",
//   },
//   {
//     id: 11,
//     question: "What is the correct way to create a closure in JavaScript?",
//     options: {
//       A: "function myFunction(){var x = 10; return function(){return x}}",
//       B: "function myFunction(){let x = 10; return function(){return x}}",
//       C: "function myFunction(){const x = 10; return function(){return x}}",
//       D: "function myFunction(){x = 10; return function(){return x}}",
//     },
//     answer: "A",
//   },
//   {
//     id: 12,
//     question: "What is the difference between == and ===?",
//     options: {
//       A: "== checks for equality and === checks for identity",
//       B: "== checks for identity and === checks for equality",
//       C: "== and === checks for equality",
//       D: "== and === checks for identity",
//     },
//     answer: "A",
//   },
//   {
//     id: 13,
//     question: "What is the correct way to check if a variable is an array?",
//     options: {
//       A: "Array.isArray(myArray)",
//       B: "myArray instanceof Array",
//       C: "myArray.isArray()",
//       D: "typeof myArray === 'array'",
//     },
//     answer: "A",
//   },
//   {
//     id: 14,
//     question: "What is the correct way to declare a class in javascript?",
//     options: {
//       A: "class MyClass{}",
//       B: "function MyClass(){}",
//       C: "new MyClass(){}",
//       D: "MyClass: function(){}",
//     },
//     answer: "A",
//   },
//   {
//     id: 15,
//     question: "What is the correct way to check if a variable is undefined?",
//     options: {
//       A: "typeof myVariable === undefined",
//       B: "myVariable === undefined",
//       C: "myVariable == undefined",
//       D: "myVariable === 'undefined'",
//     },
//     answer: "B",
//   },
//   {
//     id: 16,
//     question:
//       "What is the correct way to convert a string to a number in javascript?",
//     options: {
//       A: "parseInt(string)",
//       B: "parseFloat(string)",
//       C: "Number(string)",
//       D: "string - 0",
//     },
//     answer: "C",
//   },
//   {
//     id: 17,
//     question: "What is the correct way to declare a Map in javascript?",
//     options: {
//       A: "var myMap = new Map();",
//       B: "var myMap = {};",
//       C: "var myMap = Object.create(null);",
//       D: "var myMap = new Object.create(null);",
//     },
//     answer: "A",
//   },
//   {
//     id: 18,
//     question: "What is the difference between null and undefined?",
//     options: {
//       A: "null and undefined are same",
//       B: "null is an assignment value and undefined is a default value",
//       C: "undefined is an assignment value and null is a default value",
//       D: "null is an object and undefined is not an object",
//     },
//     answer: "B",
//   },
//   {
//     id: 19,
//     question:
//       "What is the correct way to check if a variable is a number in javascript?",
//     options: {
//       A: "typeof myVariable === 'number'",
//       B: "isNaN(myVariable)",
//       C: "myVariable instanceof Number",
//       D: "Number.isFinite(myVariable)",
//     },
//     answer: "D",
//   },
//   {
//     id: 20,
//     question:
//       "What is the correct way to check if a variable is an object in javascript?",
//     options: {
//       A: "typeof myVariable === 'object'",
//       B: "myVariable instanceof Object",
//       C: "Object.isObject(myVariable)",
//       D: "myVariable.constructor === Object",
//     },
//     answer: "D",
//   },
// ];





const quizArr = [
  {
    id: 1,
    question: "What is Node.js?",
    options: {
      A: "A JavaScript library for building user interfaces",
      B: "A runtime environment for executing JavaScript on the server",
      C: "A database management system",
      D: "A version control system",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "Which of the following is a built-in module in Node.js?",
    options: {
      A: "express",
      B: "http",
      C: "mongoose",
      D: "lodash",
    },
    answer: "B",
  },
  {
    id: 3,
    question: "How do you import a module in Node.js?",
    options: {
      A: "import moduleName from 'module-name';",
      B: "require('module-name');",
      C: "include('module-name');",
      D: "load('module-name');",
    },
    answer: "B",
  },
  {
    id: 4,
    question: "What is the purpose of the package.json file in a Node.js project?",
    options: {
      A: "To list the dependencies of the project",
      B: "To specify the version of Node.js used",
      C: "To define the project's metadata",
      D: "All of the above",
    },
    answer: "D",
  },
  {
    id: 5,
    question: "Which command is used to initialize a new Node.js project?",
    options: {
      A: "npm start",
      B: "npm install",
      C: "npm init",
      D: "npm build",
    },
    answer: "C",
  },
  {
    id: 6,
    question: "How can you create an HTTP server in Node.js?",
    options: {
      A: "var server = new http.Server();",
      B: "var server = http.createServer();",
      C: "var server = http.newServer();",
      D: "var server = http.initServer();",
    },
    answer: "B",
  },
  {
    id: 7,
    question: "Which method is used to read a file asynchronously in Node.js?",
    options: {
      A: "fs.readFileSync",
      B: "fs.read",
      C: "fs.readFile",
      D: "fs.readAsync",
    },
    answer: "C",
  },
  {
    id: 8,
    question: "What is npm in the context of Node.js?",
    options: {
      A: "A programming language",
      B: "A package manager for JavaScript",
      C: "A type of database",
      D: "A web server",
    },
    answer: "B",
  },
  {
    id: 9,
    question: "Which of the following is true about the event loop in Node.js?",
    options: {
      A: "It blocks the execution of code",
      B: "It handles asynchronous operations",
      C: "It is a synchronous loop",
      D: "It is part of the Node.js core library",
    },
    answer: "B",
  },
  {
    id: 10,
    question: "How do you handle exceptions in Node.js?",
    options: {
      A: "Using the try...catch block",
      B: "Using the throw keyword",
      C: "Using process.on('uncaughtException')",
      D: "All of the above",
    },
    answer: "D",
  },
  {
    id: 11,
    question: "What does the 'path' module provide in Node.js?",
    options: {
      A: "Functions for handling file paths",
      B: "Methods for making HTTP requests",
      C: "Tools for working with databases",
      D: "Utilities for working with streams",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "Which of the following is a valid way to export a module in Node.js?",
    options: {
      A: "module.export = myFunction;",
      B: "exports.myFunction = myFunction;",
      C: "export myFunction;",
      D: "module.exports.myFunction = myFunction;",
    },
    answer: "B",
  },
  {
    id: 13,
    question: "Which module is used for creating web servers in Node.js?",
    options: {
      A: "url",
      B: "fs",
      C: "http",
      D: "stream",
    },
    answer: "C",
  },
  {
    id: 14,
    question: "How do you install a package using npm?",
    options: {
      A: "npm get package-name",
      B: "npm install package-name",
      C: "npm require package-name",
      D: "npm create package-name",
    },
    answer: "B",
  },
  {
    id: 15,
    question: "What is a callback function in Node.js?",
    options: {
      A: "A function that is executed immediately",
      B: "A function passed as an argument to another function",
      C: "A function that is called when an event is emitted",
      D: "A function that is only called once",
    },
    answer: "B",
  },
  {
    id: 16,
    question: "Which module is used to work with file systems in Node.js?",
    options: {
      A: "os",
      B: "path",
      C: "fs",
      D: "net",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "How do you start a Node.js application?",
    options: {
      A: "node app.js",
      B: "npm app.js",
      C: "node start app.js",
      D: "npm start app.js",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "What is the purpose of the 'util' module in Node.js?",
    options: {
      A: "To provide utilities for debugging and inspecting code",
      B: "To work with URLs",
      C: "To handle HTTP requests",
      D: "To manage child processes",
    },
    answer: "A",
  },
  {
    id: 19,
    question: "Which of the following is true about streams in Node.js?",
    options: {
      A: "Streams are used to handle large amounts of data efficiently",
      B: "Streams are synchronous",
      C: "Streams can only be used for file operations",
      D: "Streams are not part of the Node.js core",
    },
    answer: "A",
  },
  {
    id: 20,
    question: "What is the purpose of the 'event' module in Node.js?",
    options: {
      A: "To work with file events",
      B: "To handle asynchronous events",
      C: "To manage server events",
      D: "To work with HTTP events",
    },
    answer: "B",
  },
];

