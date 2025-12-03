const {writeFileSync, readFileSync} = require("fs");

const firstLine = "This is the first line of the file.";
const secondLine = "This is the second line of the file.";
const thirdLine = "This is the third line of the file.";

// Writing to a file synchronously 
writeFileSync("./temporary/fileA.txt",`${firstLine} ${secondLine} ${thirdLine}`,{flag:"a"})
console.log("File written successfully.")

// Reading from the file synchronously
const fileContent = readFileSync("./temporary/fileA.txt","utf-8");
console.log("File content:", fileContent)