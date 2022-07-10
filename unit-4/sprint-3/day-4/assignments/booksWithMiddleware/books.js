const express = require('express');
const booksData = require('./booksData.json');

const app = express();

app.use(express.json());
app.use(requestedBy("Kartik"));

app.get('/', (req, res)=>{
    res.status(200).send({api_requested_by: req.requesterName, books: booksData});
});

app.get('/books/:id', (req, res)=>{
    const id = +req.params.id;
    const book = booksData.filter(item => item.id === id);
    res.send({api_requested_by: req.requesterName, book: book[0]});
});

app.post('/books/', (req, res)=>{
    const newBook = req.body;
    booksData.push(newBook);
    res.status(201).send({api_requested_by: req.requesterName, books: booksData});
});

app.put('/books/:id', (req, res)=>{
    const id = +req.params.id;
    const editBook = req.body;
    const updatedBooks = booksData.map(book => book.id === id? editBook : book);
    res.status(201).send({api_requested_by: req.requesterName, books: updatedBooks});
})

app.patch('/books/:id', (req, res)=>{
    const id = +req.params.id;
    const editBook = req.body;
    const updatedBooks = booksData.map(book => book.id === id? {...book, ...editBook} : book);
    res.status(201).send({api_requested_by: req.requesterName, books: updatedBooks});
})

app.delete('/books/:id', (req, res)=>{
    const id = +req.params.id;
    const updatedBooks = booksData.filter(book => book.id !== id);
    res.status(206).send({api_requested_by: req.requesterName, books: updatedBooks});
})

function requestedBy (name){
    return(req, res, next) =>{
        req.requesterName= name;
        next();
    }
}

app.listen(4000, ()=>{
    console.log('listeninig to port 4000')
});