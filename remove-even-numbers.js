// Exercise
// Remove even numbers from an array

// input: 1, 2, 5, 4, 3, 9, 12
// output: 1, 5, 3, 9

const removeEvenNumbers = (numbers) => {
  return numbers.filter(number => number%2 !== 0 );
};

const numbers = [1, 2, 5, 4, 3, 9, 12];

console.log(removeEvenNumbers(numbers));