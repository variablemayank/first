var fs = require('fs');

console.log("start");
var content = fs.readFileSync("csvjson.json");

console.log("content is",content);