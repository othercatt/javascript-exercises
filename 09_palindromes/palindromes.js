const palindromes = function (string) {
  
  let trimmedStr = string.replace(/\W/g, '');
  let lowerStr = trimmedStr.toLowerCase();
  
  let forward = lowerStr.split('');
  let backward = [];
  
  while (forward && forward.length) {
    let newChar = forward.pop();
    backward.push(newChar);
  }
  
  let backString = backward.join('');
  return (lowerStr === backString);
};

// Do not edit below this line
module.exports = palindromes;
