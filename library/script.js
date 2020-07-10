let addBook = document.getElementById('New-book')
let submit = document.getElementById('submit')


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

function openForm(){
    document.getElementById("popup-form").style.display = 'block';
}

function closeForm(){
    document.getElementById("popup-form").style.display = 'none';
}
addBook.addEventListener('click',openForm)
submit.addEventListener('click',closeForm)