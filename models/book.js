const fs = require('fs');
const path = require('path');
const uuid = require('uuid/v1');
const bookPath = path.join(__dirname, "..", "data", "books.json");

const readAll = () => {
    const booksJSON = fs.readFileSync(bookPath, 'utf8');
    return JSON.parse(booksJSON);
}

const readIndividual = (book_id) => {
    const booksJSON = fs.readFileSync(bookPath, 'utf8');
    const books = JSON.parse(booksJSON);
    // Filter books by their id
    let filteredBooks = books.filter(book => book.id === book_id);
    return filteredBooks[0];
}

const createIndividual = (request, response) => {
    const booksJSON = fs.readFileSync(bookPath, 'utf8');
    const newBook = { id: uuid(), name: request.body.name, borrowed: request.body.borrowed, description: request.body.description, author_ids: [] };
    let booksArray = JSON.parse(booksJSON);
    booksArray.push(newBook);
    booksArrayJSON = JSON.stringify(booksArray);
    fs.writeFileSync(bookPath, booksArrayJSON);

    return booksArrayJSON;
}

module.exports = {
    readAll, 
    createIndividual,
    readIndividual
}