/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// ----------------------------------Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages;
console.log(john, mary, joe);

// ----------------------------------Destructuring objects
let jobs = {
    mike:   "Designer",
    jill:   "Developer",
    alicia: "Accountant",
};

let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// ----------------------------------Destructuring subsets
let languages = ["English", "French", "Spanish", "German", "Japanese"];

let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage:  "English",
    secondLanguage:  "French",
    thirdLanguage:  "German",
    fourthLanguage:  "Japanese",
};

let { firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// ----------------------------------Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian:  "Pizza",
    anna:   "Candy",
    sara:   "Veggie",
    hanna: "Stake"
};

let { brian, anna, ...rest } = favoriteFoods;

console.log(brian);
console.log(anna);
console.log(rest);