const reverseString = function(string) {
  let letterArray = string.split('');
  let newString = '';
  for (i = 0; i < string.length; i++) {
    let char = letterArray.pop();
    newString += char;
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
