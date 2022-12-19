const fs=require("fs");
let dataBuffer=fs.readFileSync("1-json.json");
let dataJson=dataBuffer.toString()
let data=JSON.parse(dataJson);
console.log(data.title)