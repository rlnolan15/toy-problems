const productOfOtherNumbers = arr => {
  let result = [];

  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = product;
    product *= arr[i];
  }

  product = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] *= product;
    product *= arr[j];
  }

  return result;
};
