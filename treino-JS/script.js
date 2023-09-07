/*
Create a function that takes an array of numbers and a chosen number. The function must return how many times this number appears in the array.

Ex: if the array is [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5] and the chosen number is 4, your function should say: The number 4 appears 3x

For the same array, if the chosen number is 3, your function should return: Number not found
*/

// const arrayOfNumbers = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5];

// let counter = 0;

// function countNumber(array, number) {

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             counter++
//         }
//         console.log(counter)
//         if (number === 3) {
//             return `Number not found`
//         } else {
//             return `The number 4 appears ${counter} times`
//         }

//     }
// }
//     console.log(countNumber(arrayOfNumbers, 4));

const arrayOfNumbers = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5];
let chosenNum = 4;
let counter = 0;

function countNumber(array, number) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            counter++
        }
    }

    if (number === 3) {
        return `Number not found`
    } else {
        return `The number 4 appears ${counter} times`
    }
}
console.log(countNumber(arrayOfNumbers, chosenNum));