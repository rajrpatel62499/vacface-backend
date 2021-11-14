const fs = require("fs");
const persons = JSON.parse(fs.readFileSync("./person.json", {encoding: 'utf-8'}));

console.log(persons);