const fs = require("fs");
const path = require("path");
const uuid = require("uuid/v1");

const authorsPath = path.join(__dirname, "..", "data", "authors.json");
const booksPath = path.join(__dirname, "..", "data", "books.json");

const readAll = book_id => {
  // Read and parse the books file
  const booksJSON = fs.readFileSync(booksPath, "utf8");
  const books = JSON.parse(booksJSON);

  // Filter books by the id
  let filteredBooks = books.filter(book => book.id === book_id);

  let book = filteredBooks[0];
  // Read and parse the authors file
  const authorsJSON = fs.readFileSync(authorsPath, "utf8");
  const authors = JSON.parse(authorsJSON);

  // Map over the books's  author_id array
    const bookAuthors = book.author_ids.map(author_id =>
    // Filter the authors array to capture each author based on the id in the author_id array
    authors.filter(author => author.id === author_id)
  );

  return bookAuthors;
};

module.exports = {
  readAll
};
