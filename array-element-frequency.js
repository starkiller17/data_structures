// Exercise: Count frequency of an element in an array

var countFrequencyOfNum = (numbers) => {
  // TODO
  let frequency = {};

  numbers.forEach( (number) => {
    if (frequency[number.toString()]) {
      frequency[number.toString()]++;
    }
    else {
      frequency[number.toString()] = 1;
    }    
  });
  
  return frequency;
};

console.log(countFrequencyOfNum([2, 5, 4, 2, 5, 5, 2, 2, 5, 3]));
