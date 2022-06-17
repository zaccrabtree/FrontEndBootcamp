// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to 
// reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

console.log(ages[ages.length-1] - ages[0]);

// Add a new age to your array and repeat the step above to 
// ensure it is dynamic (works for arrays of different lengths).

ages.push(13);

console.log(ages[ages.length-1] - ages[0]);

// Use a loop to iterate through the array and calculate the average age. 
// Print the result to the console.

function getAvg(ages) {
    let total = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total / ages.length;
}

console.log(getAvg(ages));

// Create an array called names that contains the following values:
//  ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// Use a loop to iterate through the array and calculate the average 
// number of letters per name. Print the result to the console.
let lengths = names.map(function(element) {
    return element.length;
})
console.log(lengths);

function avgLengths(lengths) {
    let total = lengths.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total / lengths.length;
}
console.log(avgLengths(lengths));

// Use a loop to iterate through the array again and concatenate 
// all the names together, separated by spaces, and print the result to the console.

let namesString = names.join(', ');
console.log(namesString);

// How do you access the last element of any array?
// array[array.length-1];

//How do you access the first element of any array?
// array[0];

// Create a new array called nameLengths. Write a loop to iterate 
// over the previously created names array and add the length of each 
// name to the nameLengths array. For example: namesArray = ["Kelly", "Sam", "Kate"] given this array
// name Lengths = [5, 3, 4] create this new array
let nameLengths = names.map(function(element){
    return element.length;
})
console.log(nameLengths)

// Write a loop to iterate over the nameLengths 
// array and calculate the sum of all the elements in the array. 
// Print the result to the console.
function sumOfNameLengths(nameLengths) {
    let total = nameLengths.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total;
}
console.log(sumOfNameLengths(nameLengths));

// Write a function that takes two parameters, word and n, as arguments 
// and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to 
// return ‘HelloHelloHello’).


function wordMultiplier(word, n) {
    let wordString = "";
    while(n > 0) {
        wordString += word;
        n--;
    }
    return wordString;
}
console.log(wordMultiplier("Arlie", 4));

// Write a function that takes two parameters, firstName and lastName, 
// and returns a full name (the full name should be the first and the 
// last name separated by a space).
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
// Write a function that takes an array of numbers 
// and returns true if the sum of all the numbers in the 
// array is greater than 100.
function sumOver100(array) {
    let total = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if(total > 100) {
        return true;
    } else {
        return false
    }
}  
let yankee = [3, 5, 6, 10, 131, 45];
let brave = [1, 2, 4, 5, 8];
console.log(sumOver100(yankee));
console.log(sumOver100(brave));

// Write a function that takes an 
// array of numbers and returns the average of 
// all the elements in the array
function arrayAvg (array) {
    let total = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return total / array.length;
}
console.log(arrayAvg(brave));
console.log(arrayAvg(yankee));

// Write a function that takes two arrays of numbers and returns 
// true if the average of the elements in the first array is greater 
// than the average of the elements in the second array.
function arrayAverageComp(arr1, arr2) {
    let arr1Total = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let arr2Total = arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let arr1Avg = arr1Total / arr1.length;
    let arr2Avg = arr2Total / arr2.length;
    if(arr1Avg > arr2Avg) {
        return true;
    } else {
        return false;
    }
}
console.log(arrayAverageComp(yankee, brave));
console.log(arrayAverageComp(brave, yankee));

// Write a function called willBuyDrink that takes a boolean isHotOutside, 
// and a number moneyInPocket, and returns true if it is hot outside and if 
// moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 12));
console.log(willBuyDrink(false, 20));
console.log(willBuyDrink(true, 5));

// Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

//This function will help determine the most economical or otherwise beneficial decision
//for my suburban quail farming operation. Its parameter will be a particular quail individual
//and will decide whether to "keep," "cull for meat," "euthanize," "quarantine", or "retire as a pet."
//I will keep a quail hen if its egg production averages 4 or more eggs per week, it is not badly injured,
//it is not sick. I will cull a quail hen for meat if it averages less than 4 eggs per week, and
//it is not sick, unless my children have < 3 pet quail and they have named it-- in which case I will 
//retire it as a pet. I will euthanize a quail hen if it is badly injured, or if it is sick and its 
//egg production averages less than 4 eggs per week (unless my children have < 3 pets and have named it--
//in that case I will quarantine it). I will quarantine a quail hen if it is sick and its egg production 
//averages 4 or more eggs per week, or if it is sick and my children have < 3 pet quail. I will keep a 
//quail rooster if it is not sick or badly injured. If it is sick, I will quarantine a quail rooster. 
//If it is badly injured, I will euthanize it. 

function quailAnalysis(quail) {
    let eggTotal = quail.weeklyEggs.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let eggAvg = eggTotal / quail.weeklyEggs.length;
    if((quail.badlyInjured && quail.named) || (quail.hen && quail.sick && (eggAvg < 4) && !quail.named)) {
        return "euthanize";
    } else if(!quail.sick && quail.badlyInjured && !quail.named) {
        return "cull for meat"
    }
    else if(((quail.hen && (eggAvg >= 4)) && !quail.sick)|| 
    (!quail.hen && !quail.sick && !quail.badlyInjured)){
        return "keep";
    }
    else if(quail.hen && (eggAvg < 4) && !quail.sick) {
        if(quail.named && lessThan3Pets) {
            return "retire as pet"
        }
        else{
            return "cull for meat"
        }
    }
    else if((!quail.hen && quail.sick) || (quail.hen && quail.sick && (eggAvg > 4 || quail.named))){
        return "quarantine";
    }
    }

let lessThan3Pets = true;

let quail1 = {
    hen: true,
    named: true,
    weeklyEggs: [4, 3, 5, 8, 2],
    badlyInjured: false,
    sick: false
}

let quail2 = {
    hen: false,
    named: true,
    weeklyEggs: [0, 0, 0, 0, 0],
    badlyInjured: false,
    sick: true
}

let quail3 = {
    hen: true,
    named: false,
    weeklyEggs: [6, 2, 1, 1, 2, 2],
    badlyInjured: false,
    sick: false
}

let quail4 = {
    hen: true,
    named: false,
    weeklyEggs: [4, 11, 5, 3, 2, 10],
    badlyInjured: true,
    sick: false
}
console.log(quailAnalysis(quail1));
console.log(quailAnalysis(quail2));
console.log(quailAnalysis(quail3));
console.log(quailAnalysis(quail4));
