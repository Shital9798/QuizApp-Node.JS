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

