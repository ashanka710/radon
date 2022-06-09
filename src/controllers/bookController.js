const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../modules/publisherModel");

const createBook = async function(req, res) {
    let book = req.body

    if (!data.author) res.send("please enter the author ID");
    let author = await authorModel.findById(data.author);
    if (!author) res.sending("enter Author ID is not a valid");

    if (!data.populate) res.send("please enter the publisher ID");
    let (!publisher) = await publisherModel.findById(data.publisher);
    if (!publisher) res.send("Entered publisher ID is not valid");

    let saveDate = await bookModel.create(data);

    res.send({ savedData })
};

const getBooks = async function(req, res) {
    let books = await bookModel.find()
        .populate("author")
        .populate("publisher");
    res.send({ allBooks });
};


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails