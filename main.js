#! /usr/bin/env node
import inquirer from "inquirer";
console.log();
const ans = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "enter paragraph"
});
let words = ans.sentence.trim().split(" ");
console.log(words);
console.log(`there are ${words.length} words in this line`);
