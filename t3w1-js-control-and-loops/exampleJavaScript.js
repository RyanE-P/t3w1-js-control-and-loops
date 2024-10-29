// console.log("Hello!")
//if and if/else statements

export let someMessage = 10; //"Bananas";

if (someMessage == "Oranges") {
    //truthy condition
    console.log("We have oranges");
}

console.log(someMessage); 
let someNumber = "10";

if (someNumber ===10) {
    console.log("We have 10!!")
}

if (someNumber >= 5 ) {
    console.log("We have 5 or more!");
} else {
    console.log("Less than five");
}

//ternary operators

export let someCoolMessage = (someMessage == "Bananas") ?
    ? someMessage.toLocaleUpperCase() 
    : "Default message here."

console.log(someCoolMessage);

// Switch operator

someMessage = "Orange";

switch (someMessage) {
    case "orange":
        console.log("We have oranges");
        break;
    case "bananas":
        console.log("bananas");
        break;
    case "mangoes"
        console.log("mangoes");
        break;
    default:
        console.log("We have another fruit")
        break;
}

//short circuit logic

someMessage = "Mango";
// evaluate if the first part is true, if it isa, we return the second part 
// if the first part is false, it returns the first part "", 0, false boolean
let circuitLogicMessage = someMessage && "We have a message";

console.log(circuitLogicMessage);

// It returns the first block that is true 
// If both false, it will return the second one
circuitLogicMessage = "" || 0;

console.log(circuitLogicMessage);

