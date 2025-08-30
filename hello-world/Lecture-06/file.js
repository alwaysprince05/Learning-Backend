const fs = require("fs");

// Sync... Blocking Req....
// fs.writeFileSync("./test.txt","Hello World");

// Async... Non - Blocking Req....
// fs.writeFile("./test.txt","Hello World Async", (err) => {});


// Blocking...
// console.log("1");
// const result = fs.readFileSync("contacts.txt","utf-8")
// console.log(result);
// console.log("2"); // Blocking req me hamne thread ko hi block kr diya to vo hme request return bhi kr skti hai.


// Non - Blocking...
// console.log("1");
// fs.readFile("contacts.txt","utf-8",(err,result) => {
//     console.log(result);
// }); // Note -> Non - Blocking req hme result Async deta hai.

// console.log("2");
// console.log("3");
// console.log("4");

// Note -> Default Thread Pool size is = 4
// Max? = It depends on machine to machine - 8core cpu - 8(max)

// core ko pta krne ke liye hm os module ka use krte hai inside Node.js

const os = require('os');

console.log(os.cpus().length);