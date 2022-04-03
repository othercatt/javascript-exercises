const removeFromArray = function(userArray) {
  
  let newArray = [];
  
  // create a list of target words
  let targets = Array.prototype.slice.call(arguments, 1);
  

  // for each item in array
  for (i = 0; i < userArray.length; i++) {
    let arrItem = userArray[i];
    // if it is NOT in target list AND it is NOT already in newArray
    // add it to newArray
    if (!targets.includes(arrItem) && !newArray.includes(arrItem)) {
      newArray.push(arrItem);
    }  
  };
  
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
