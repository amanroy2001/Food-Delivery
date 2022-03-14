const fs=require ("fs");
const text=fs.readFile("test.txt","utf-8",(err,data)=>{
    console.log(data);
});

console.log("The content of line is")
console.log(text);