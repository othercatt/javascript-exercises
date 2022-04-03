const sumAll = function(firstNum, secondNum) {
  let total = 0;
  let min = '';
  let max = '';
  let errorMsg = 'ERROR';
    
  if (firstNum < 0 || secondNum < 0) {
    return errorMsg;
  } else if (typeof firstNum != 'number' || typeof secondNum != 'number') {
    return errorMsg;
  }  else {
    if (firstNum > secondNum) {
      max = firstNum;
      min = secondNum;
    } else {
      min = firstNum;
      max = secondNum;
    };

    for (i = min; i < (max + 1); i++) { 
      // using (X; i = max; X) caused freezing during testing
      total += i;
    }
    return total;
  };

};

// Do not edit below this line
module.exports = sumAll;
