
// Write a calculator function that takes a string of numbers and performs addition with the rules:
// The function should accept 0, 1, or 2 numbers; an empty string should return an empty string.
// It should handle an unknown number of numbers but ignore numbers larger than 1000.
// Throw an exception for any negative numbers.
// Be prepared to discuss your code on return

// const x = Number('10', '3')

console.log(x);

const y = `10,4`

const numArray = y.split(" ")

const NewNum = Number(numArray)
// enter dynamic string
//change string to array
// we need to loop through array to change them to numbers
//reduce - add together the numbers in the array and return the total or just add 