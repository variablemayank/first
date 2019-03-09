var fs = require('fs');

console.log("start");
var content = fs.readFileSync("csvjson.json");

var jsoncontent = JSON.parse(content);

console.log(jsoncontent);