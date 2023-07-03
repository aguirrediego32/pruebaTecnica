function findElements(nums, requiredSum) {
  resultado = 0;
  valorBuscado = false;

  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = 0; j <= nums.length - 1; j++) {
      if (i != j) {
        resultado = nums[i] + nums[j];
      }
      if (resultado == requiredSum) {
        valorBuscado = true;
      }
    }
  }
  return valorBuscado;
}

// console.log(findElements([1,4,3,9], 8));
// console.log(findElements([1,2,4,4], 8));

function findElements2(nums, requiredSum) {
  let resultado;
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      resultado = nums[i] + nums[j];
      if (resultado == requiredSum) {
        return true;
      }
    }
  }
  return false;
}

console.log(findElements2([1, 4, 3, 9], 8));
console.log(findElements2([1, 2, 4, 4, 9, 11], 8));
