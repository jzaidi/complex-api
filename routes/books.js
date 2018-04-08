const express = require('express');
const router = express.Router();
const uuid = require("uuid/v1");
const fs = require("fs");
const path = require("path");

const booksController = require("../controllers/books");
const booksPath = path.join(__dirname, "..", "data", "books.json");


// Read all books
router.get('/', booksController.readAll);

// Read individual
router.get("/:id", booksController.readIndividual);

// Create
router.post("/", booksController.createIndividual);

// Update
router.put("/:id", (request, response) => {});

// Delete
router.delete("/:id", (request, response) => {});

module.exports = router;