const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const readline = require("readline");

const books = require('./booksList')

const inpOut = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

eventEmitter.on("bookList", books.bookList);

eventEmitter.on("addBook", books.bookAdd);

eventEmitter.on("exit", ()=>{
    inpOut.close();
})

function quest(){
    inpOut.question("choose from options 1 to show all books, 2 to add a new book, 3 to quit ", (num)=>{
        if(num === '1'){
            eventEmitter.emit("bookList");
            return quest();
        }
        else if(num === '2'){
            inpOut.question("Add the name of the book? ", (bookName)=>{
                eventEmitter.emit("addBook", bookName);
                return quest();
            })
        }
        else if(num === '3'){
            eventEmitter.emit("exit")
        }
        else {
            console.log('You have selected an invalid entry so please press 1, 2 or 3');
            return quest();
        }
    });
}
quest();