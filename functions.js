/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const books = require("./books.json");
console.log(books[0]);

/**************************************************************
 * numberOfAuthors(book)
 * - recieves a book object
 * - returns the number of authors that the book has
 ****************************************************************/
function numberOfAuthors(book) {
  return book.authors.length;
}
console.log(numberOfAuthors(books[0]));

/**************************************************************
 * getBookById(bookId, books):
 * - receives a book id
 * - recieves an array of book objects
 * - returns the book object with the same id as the bookId provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getBookById(bookId, books) {
  books.find((element) => element.id == bookId);
}

console.log(getBookById(38, books));

/**************************************************************
 * getbookByauthorName(authorName, books):
 * - receives a author name (string)
 * - recieves an array of book objects
 * - returns the book object that contains a author with the author name provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getbookByauthorName(authorName, books) {
  return books.find((book) =>
    book.authors.some((author) => author.name == authorName)
  );
}

console.log(getbookByauthorName("Oliver Sachs", books));

// console.log(getbookByauthorName("Neil Gaiman", books));

/**************************************************************
  * addSummaryToBook(summary, book):
  * - receives a book object
  * - recieves a summary
  * - adds the summary to the book object 
  * - return the book object 
  *

  ****************************************************************/
function addSummaryToBook(summary, book) {
  book.summary = summary;
  return book;
}
console.log(addSummaryToBook("worth reading", books[0]));

/**************************************************************
  * getBookProperty(property, book):
  * - receives a book object
  * - recieves a property (string)
  * - return the book property 
  *

  ****************************************************************/
function getBookProperty(property, book) {
  // return book.color;
  return book[property];
  // wayed a7san w after we just conslo what we want
}

console.log(getBookProperty("color", books[0]));
console.log(getBookProperty("title", books[3]));
