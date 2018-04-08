const fs = require('fs');
const path = require('path');

const authorModel = require("../models/author");
const authorPath = path.join(__dirname, "..", "data", "authors.json");

const readAll = (request, response) => {
    const authors = authorModel.readAll(request.params.id);
    response.send(authors)
};

const readIndividual = (request, response) => {
    const author = authorModel.readIndividual(request.params.id);
    response.send(author);
}

const createIndividual = (request, response) => {
    const new_author = authorModel.createIndividual(request, response);
    response.send(new_author);
 }

module.exports = {
    readAll,
    createIndividual,
    readIndividual
}