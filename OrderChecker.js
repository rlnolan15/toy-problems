let orderChecker = (takeOut, dineIn, served) => {
  let takeOutIdx = 0;
  let dineInIdx = 0;

  for (let i = 0; i < served.length; i++) {
    if (takeOutIdx < takeOut.length && served[i] === takeOut[takeOutIdx]) {
      takeOutIdx++;
    } else if (dineInIdx < dineIn.length && served[i] === dineIn[dineInIdx]) {
      dineInIdx++;
    } else {
      return false;
    }
  }

  if (dineInIdx !== dineIn.length && takeOutIdx !== takeOut.length) {
    return false;
  }

  return true;
};
