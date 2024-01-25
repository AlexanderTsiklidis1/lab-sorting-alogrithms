const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  return nums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  return nums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  return words.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  return words.sort((a, b) => b.localeCompare(a));
  //used localeCompare --> returns  number indicating whether this 
  //string comes before or after or the same as given string in sort order 
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
  return products.sort((a,b) => a.name.localeCompare(b.name));
  //uses locale compare for same reason described above(comparing strings)
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  return products.sort((a,b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  return products.sort((a,b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (products) => {
  return products.sort((a, b) => {
    if (a.price === b.price) {
      return a.name.localeCompare(b.name);
    }
    return a.price - b.price;
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = (art) => {
  return art.sort((a, b) => a.designedBy.localeCompare(b.designedBy));
};

// sort catArt by price
const catArtSortByPriceA = () => {};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = () => {};

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
