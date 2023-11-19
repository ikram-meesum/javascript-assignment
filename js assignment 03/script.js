// Q-1
let english = Number(prompt("Please enter marks of english"));
let math = Number(prompt("Please enter marks of math"));
let physics = Number(prompt("Please enter marks of physics"));
let islamiat = Number(prompt("Please enter marks of islamiat"));

alert("Each subject has 100 max marks");
let total = english + math + physics + islamiat;
console.log("Total getting marks: ", total);

let percentage = total / 400;
let result = (percentage * 100).toFixed(2);
alert(result);

// Q-2
function displayType(data) {
  console.log(data, " type is ", typeof data);
}

displayType("karachi");
displayType(123);
displayType(true);
displayType(["karachi", 396, true]);
displayType({ myname: "Ikram", age: 45 });
displayType(new Date());

// Q-3

function doSum(val1, val2) {
  alert(val1 + val2);
}
doSum(14, 5);

function doMultiply(val1, val2) {
  alert(val1 * val2);
}
doMultiply(4, 5);

function doSubstract(val1, val2) {
  alert(val1 - val2);
}
doSubstract(27, 5);

function doRemainder(val1, val2) {
  alert(val1 % val2);
}
doRemainder(5, 2);

// Q-4

let playerName = prompt("Enter the name of player");
let age = prompt("Enter the age of player");
let team = prompt("Enter the name of team");
let country = prompt("Enter the name of country");
let gender = prompt("Enter the gender");
let under13 = prompt("Is he in under 13 team. YES / NO");
let under19 = prompt("Is he in under 19 team. YES / NO");
let t20 = prompt("Is he in T20 team. YES / NO");
let testMatch = prompt("Enter the number of test matches");
let testInning = prompt("Enter the numer of test innings");

function getInfo() {
  if (under13 === "YES") {
    under13 = "He has played in under 13";
  } else {
    under13 = "He has no played in under 13";
  }
  if (under19 === "YES") {
    under19 = "He has played in under 19";
  } else {
    under19 = "He has no played in under 19";
  }
  if (t20 === "YES") {
    t20 = "He has played in t20";
  } else {
    t20 = "He has no played in t20";
  }
  let info = `The ${playerName} is a cricketer and he is ${age} years old and
  his team name is ${team}. He lives in ${country} and he is ${gender}.
  ${under13} and ${under19} as well as ${t20} also. In his life he played ${testMatch} matches and ${testInning} innings.`;

  alert(info);
}
getInfo();

// Q-6

function checkPalindrome(string) {
  // convert string to an array
  const arrayValues = string.split("");

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join("");

  if (string == reverseString) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}

//take input
const string = prompt("Please enter the any string: ");

checkPalindrome(string);

// Q-7

function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "No, It is not a palindrome";
    }
  }
  return "Yes, It is a palindrome";
}

const stringdata = prompt("Enter a string: ");

const value = checkPalindrome(stringdata);
console.log(value);

// Q-8

const my_string = "I like dogs because dogs are adorable!";

let pattern = "dogs";
let replacement = "cats";

let my_new_string = my_string.replaceAll("dogs", "cats");
alert(my_new_string);

// Q-9

let str = "the quick brown fox jumps over the lazy dog";

//const str = "big black bug bit a big black dog on his big black nose";
const findDuplicateWords = (str) => {
  const strArr = str.split(" ");
  const res = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
      if (!res.includes(strArr[i])) {
        res.push(strArr[i]);
      }
    }
  }
  return res.join(" ");
};
console.log(findDuplicateWords(str));
