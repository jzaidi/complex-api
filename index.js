const express = require('express');
const app = express();
const PORT = process.env.PORT || 3009;
const bookRoutes = require('./routes/books');
const authorRoutes = require('./routes/authors');
app.use(express.json()); //Body parser

app.get('/', (request, response) => {
    response.send('Books and Authors: Slash route is good to go');
});

app.use('/books', bookRoutes);
app.use('/authors',authorRoutes);

app.listen(PORT, () => {
    console.log(`Books and Authors: Listening on port no. ${PORT}...`);
})