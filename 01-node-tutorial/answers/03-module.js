const {Moses, Sam, Faith} = require("./06-alternative-flavor")
const {display} = require("./05-utils");
const names = require("./04-names");

for(let i=0; i<names.length; i++){
    display(`Hello ${names[i].first} ${names[i].last}. How was your weekend!`)
}
display(`My friends are ${Moses}, ${ Sam} and ${Faith}`)