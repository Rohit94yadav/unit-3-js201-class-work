const books = [
    "To Kill a Mockingbird, by Harper Lee",
    "Harry Potter and the Philosopher’s Stone, by J.K. Rowling",
    "The Lord of the Rings, by J.R.R. Tolkien"
]

function bookList (){
    books.forEach(item=>{
        console.log(item);
    })
}

function bookAdd(bookName){
    books.push(bookName);
    console.log(`${bookName} added successfully`);
}

module.exports = {bookList, bookAdd};