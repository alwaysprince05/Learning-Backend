const fs = require("fs");

// Sync...(work)
// fs.writeFileSync("./test.txt","Hey There");

// Async...(for error handling)(work)
// fs.writeFile("./test.txt","Hello World Async", (err) => {});

// Sync...(work me readFileSync result ko ek variable ke andar lakar de deta hai)
// const result = fs.readFileSync("./contacts.txt","utf-8")
// console.log(result);

// readFile -> this will not return a result
// fs.readFile("./contacts.txt","utf-8",(err,result) => {
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// });

// appendFile
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString()); // this will add the current date inside the test.txt
// ex-2
// fs.appendFileSync("./test.txt",`${Date.now()}Hey there\n`);

// copyFile
// fs.cpSync("./test.txt","./copy.txt");

// deleteFile
// fs.unlinkSync("./copy.txt")

// statistics File ka dekh sakte hai.
// console.log(fs.statSync("./test.txt").isFile()); // isFile() -> ye file hai ya nhi iska pta krne ke liye hota hai
// console.log(fs.statSync("./test.txt"));

// Hm folder bhi create kr skte hai
// fs.mkdirSync("my-docs");

// agar hme recursive folder bnane hai than use
fs.mkdirSync("my-docss/a/b",{recursive:true});

