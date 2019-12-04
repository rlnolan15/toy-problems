var getRandom = (floor, ceiling) => {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
};

var shuffle = arr => {
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    const swapIdx = getRandom(i, arr.length - 1);

    if (swapIdx !== i) {
      arr[i] = arr[swapIdx];
      arr[swapIdx] = temp;
    }
  }
  return arr;
};

shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
