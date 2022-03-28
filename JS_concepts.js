// --------------------------------------------PRACTICE * BUILD LOGIC----------------------------------------------------
// -------------operators, Branching $ loops---------
//  [1] Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// [2] Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *
let str = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    console.log(str + '\n')
    str = '';
}

// [3] Write a program to take a number input from user and print multiplication table 12 times for that number

var inp = prompt("enter a number");
for (var i = 1; i <= 12; i++) {
    console.log(inp + ' * ' + i + ' = ' + (i * inp) + '\n');
}

// [4] Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21...

var n = prompt("number limit of fibonacci sseries : ");
let a = 0,
    b = 1,
    nxt_term;
for (let i = a; i < n; i++) {
    console.log(a + "\t")
    nxt_term = a + b;
    a = b;
    b = nxt_term;

}


// [5] Write a program to take an input from a user and find its Factorial. 

let inp = prompt("num for factorial : ")
let sum = 1;
for (let i = 1; i <= inp; i++) {
    sum *= i;
}
console.log(sum)


// [6] Write a Program to take a number input from user and find if the number is Prime or not.

let inp = prompt("check prime for : ")
let isPrime = "is Prime";
let i = 2;
if (inp <= 1) {
    console.log("is Prime")
}
for (i = 2; i < inp; i++) {
    if (inp % i == 0) {
        isPrime = "not a prime";
    }
}
console.log(isPrime)

// [7] Write a program to take a day as an input and determine whether it is a weekday or weekend.

let day_inp = prompt("enter a day to validate : ")
let op = ''
switch (day_inp) {
    case 'sunday':
        op += 'weekend';
        break;
    case 'saturday':
        op += 'weekend';
        break;
    case 'friday':
        op += 'weekday'
        break;
    case 'thursday':
        op += 'weekday';
        break;
    case 'wednesday':
        op += 'weekday';
        break;
    case 'tuesday':
        op += 'weekday';
        break;
    case 'monday':
        op += 'weekday';
        break;
}
console.log(day_inp + ' is a ' + op);

// ----------------------Functions----------------
// [1] Given a and b, your function should return the value of (a power b)

function power(a, b) {

    return a ** b;
}

power(5, 4);

// [2] Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

function areaOfHexagon(a) {
    return (2.6) * (a ** 2);
}

areaOfHexagon(5)

//[3] Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

function noOfWords(str) {
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
    return count;
}
let s = 'as i was saying'
noOfWords(s)

/**
 * [4] Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
(Hint: Lookup rest parameters in JavaScript)
 */

function findMin(...params) {
    let min = params[0];
    for (let i = 0; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }
    return min;
}

findMin(1, 2, 3)

/**
 * [5] Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9
(Hint: Lookup rest parameters in JavaScript)
 */
function findMin(...params) {
    let max = params[0];
    for (let i = 0; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i];
        }
    }
    return max;
}

findMin(1, 2, 3)


/**
 * [6] Given three angles of a triange, your function should return if it is a
 *  scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
 */

function typeOfTriangle(a1, a2, a3) {
    if (a1 + a2 + a3 === 180) {
        if (a1 === a2 && a1 === a3) {
            return 'euilateral triangle'
        } else if (a1 != a2 && a1 != a3 && a2 != a3) {
            return 'scalene triangle'
        } else if (a1 === a2 || a1 === a3 || a2 === a3) {
            return 'isoceles triangle'
        }

    } else {
        return 'not a triangle'
    }
}

typeOfTriangle(45, 45, 90)
typeOfTriangle(60, 60, 60)
typeOfTriangle(30, 70, 80)
typeOfTriangle(10, 20, 30)

/**
 * [7] Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5
 */
function arrLen(arr) {
    return arr.length;
}

arrLen([1, 2, 3, 4, 5])


/**
 * [8]Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
 */

function findIndex(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
}

findIndex([1, 2, 3, 4, 5], 4)

/**
 * [9]Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
 */

function replace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a) {
            arr[i] = b;
        }
    }
    return arr;
}

replace([9, 8, 4, 9, 8, 0, 7, 3, 4, 9], 9, 0)


/**
 * [10]Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
 */

function mergeArrays(ar1, ar2) {
    return ar1.concat(ar2)
}

mergeArrays([1, 2, 3], [4, 5]);

/**
 * [11] Given a string and an index, your function should return the character present at that index in the string.
Example:
Input: charAt("neoGcamp", 4) ––> Output: c
 */

function fetchIndex(arr, ind) {
    for (let i = 0; i < arr.length; i++) {
        return arr[ind];
    }
}
fetchIndex([1, 2, 3, 4, 5], 3)




// ----------------------------------------------objcts-----------------------------------------



// Nested Properties of objects (also including arrays/lists as properties with objects in lists nested)

//defining an object about a clue game
var game = {};

//defining a property called murderer with "." notation famously used with objects for creating properties
game.murderer = "??";

// defining a list(array) of objects for weapons with properties 'type' and 'place'
game.weapons = [
    { type: "lasers", place: "lab" },
    { type: "knife", palce: "kitchen" },
    { type: "dishsoap", place: "kitchen" }
];

//
game.name = [];
game.name[0] = "lucifer";
game.name.push("harry osborn");


// -----------------------------------------------------looping objects=--=------------------------------------

// 
// declaring an object with array of objects
const game = {
    'suspects': [{
            name: 'rusty',
            color: 'blue'
        },
        {
            name: 'sharlet',
            color: 'red'
        }
    ]
}

// using a normal for-loop to loop through a object doesent work as the variable which loops as 'i' here is a number as defined
// and so cannot output the object contents
console.log("logging-1")
for (let i = 0; i < game.suspects.length; i++) {
    console.log(game[i]);
}

// so solution is to get ibject contents we have for-in loop, refer example below
console.log("logging-2")
for (let key in game) {
    console.log(game[key])
} //o/p : suspects objcets in console as array