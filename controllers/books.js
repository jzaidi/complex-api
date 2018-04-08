const fs = require('fs');
const path = require('path');

const bookModel = require("../models/book");
const bookPath = path.join(__dirname, "..", "data", "books.json");

const readAll = (request, response) => {
    const book = bookModel.readAll();
    response.send(book);
}

const readIndividual = (request, response) => {
    const book = bookModel.readIndividual(request.params.id);
    response.send(book);
}

const createIndividual = (request, response) => {
    const new_book = bookModel.createIndividual(request, response);
    response.send(new_book);
}

module.exports = {
    readAll,
    createIndividual,
    readIndividual
}