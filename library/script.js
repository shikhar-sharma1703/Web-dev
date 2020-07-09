let addBook = document.getElementById('New-book')


//array to store book objects
let myLibrary = []

//constructor
function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function(){
        return `${title} is written by ${author}`
    }
}

function addBookToLibrary(){

}
