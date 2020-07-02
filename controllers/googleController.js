const axios = require('axios');
const db = require('../models');

module.exports = {

    findAll: function (req, res) {
        const { query: params } = req;
        axios.get("https://www.googleapis.com/books/v1/volumes", { params })
            .then(data => data.data.items.filter(res =>
                res.volumeInfo.title &&
                res.volumeInfo.infoLink &&
                res.volumeInfo.authors &&
                res.volumeInfo.description &&
                res.volumeInfo.imageLinks.smallThumbnail))
            .then(result => db.Book.find().then(dbBooks =>
                result.filter(apiBook =>
                    dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id))))
            .then(allBooks => res.json(allBooks))
    }


}