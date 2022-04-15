const getTheTitles = function(bookArray) {
  let titles = [];
  bookArray.forEach((book) => {
    titles.push(book['title']);
  });

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
