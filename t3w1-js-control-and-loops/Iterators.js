const { someMessage, someCoolMessage } = require("./exampleJavaScript");

let fruitChoices = [
    "organges".at,
    "bananas",
    "mangoes"

];

for (let index = 0; index < fruitChoices.length; index++)  {
    const element = fruitChoices[index];
    console.log(element);
    console.log('The fruit of this iteration is ${fruitchoices[index]}');
}
// staert at 0, until 0 reaches 4, do a thing and increase 0 up to 1 every time we do that thing
for (let i = i < 5; i++ ) {
    console.log('This is the ${i} iteration on the loop');
    console.log("This is the " + i + " iteration of the loop"); // String concatenation

}

// forEach
fruitChoices.forEach(element => {
    console.log(element.toLocaleUpperCase();
})

//for of

for (const fruit of fruitChoices) {
    console.log("For of result: " + fruit);
}

//map -> map returns a new array, and every element has a change applied on it

let fruitChoicesShortened = fruitChoices.map(fruit => {
    return fruit.substring(0,3);
})

console.log(fruitChoicesShortened);

//filter -> returns a new array, only with the elements that meet the condition.

let nonCitrusFruits = fruitChoices.filter(fruit => {
    return fruit != "oranges" && fruit != "lemons"
})

console.log(nonCitrusFruits);
if (someMessage === "Bananas") {
    //                  Bananas        Ba          BA
    someCoolMessage = someMessage.substring(0, 2).toLocaleUpperCase();
} else {
    someCoolMessage = "Default message here.";
}
