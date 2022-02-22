var nums = [2, 1, 629, 25, 3525, 0];

function getMinAndMax(nums) {
  // todo
  let min = nums[0];
  let max = nums[0];

  nums.forEach( (num) => {
    if ( num < min ) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  });

  return [min, max];
}

console.log(getMinAndMax(nums));