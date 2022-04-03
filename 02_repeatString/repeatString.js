const repeatString = function(string, number) {
  let newString = string;
  for (let i = 1; i < number; i++) {
    newString += string; 
  };
  if (number > 0) {
    return newString;
  } else if (number == 0) {
    return "";
  } else if (number < 0) {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
