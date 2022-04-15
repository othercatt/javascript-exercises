const findTheOldest = function(people) {
  // loop over the list of people, and for each one
  const oldest = people.sort(function(lastPerson, nextPerson) {

    let lastAge;
    if (lastPerson.yearOfDeath) {
      lastAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
    } else {
      lastAge = (new Date().getFullYear())- lastPerson.yearOfBirth;
    };

    let nextAge;
    if (nextPerson.yearOfDeath) {
      nextAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
    } else {
      nextAge = (new Date().getFullYear())- nextPerson.yearOfBirth;
    };

    // compare the ages
    return (lastAge > nextAge) ? 1 : -1;
    
  });
  // return the oldest
  return oldest[oldest.length - 1];

};

// Do not edit below this line
module.exports = findTheOldest;
