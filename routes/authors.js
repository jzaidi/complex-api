const express = require("express");
const router = express.Router();
const uuid = require("uuid/v1");
const fs = require("fs");
const path = require("path");

const authorsController = require("../controllers/authors");
const authorsPath = path.join(__dirname, "..", "data", "authors.json");

// Read all authors
router.get("/books/:id", authorsController.readAll);

// Read Individual
router.get("/:id", (request, response) => {
    response.send('test');
});

// Create
router.post("/", (request, response) => {});

// Update
router.put("/:id", (request, response) => {});

// Delete
router.delete("/:id", (request, response) => {});

module.exports = router;