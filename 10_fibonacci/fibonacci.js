const fibonacci = function(string) {
  
  let input = parseInt(string);
  if (input <= 0) return 'OOPS';
  
  let seq = [0, 1];
  if (seq.length -1 < input) {
    for (let i = 0; i < input; i++) {
      let newNum = (parseInt(seq.slice(-1)) + parseInt(seq.slice(-2)));
      seq.push(newNum);
    }
  };
  return seq[input];
};

// Do not edit below this line
module.exports = fibonacci;
