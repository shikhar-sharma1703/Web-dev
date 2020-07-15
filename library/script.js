//Firebase code

//Getting a reference to the database service
const database = firebase.database().ref()

//Create a child of the database caled books
const dbBooks = database.child("BOOKS")

//Add book to database
const addDB = (book) => {
    const autoId = dbBooks.push().key
    dbBooks.child(autoId).set({
        title: book.title,
        author: book.author,
        pages: book.pages,
        isRead: book.isRead,
    })
}

let addBook = document.getElementById('New-book')
let submit = document.getElementById('submit')
let library = document.getElementById('card-container')


//array to store book objects
let myLibrary = []

let dblibrary = "";

dbBooks.on('value',snap => {
    dblibrary = snap.val()
    keyslist = Object.keys(dblibrary)
    books = Object.values(dblibrary)
    for(let j =0; j < books.length; j++){
        myLibrary.push(myLibrary.push(new Book(books[j].title,books[j].author,books[j].pages,books[j].isRead)))
    }
    render()
})


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

//Popping up of form fixed
function openForm(){
    if (addBook.value == "add"){
        addBook.innerHTML = "Done"
        document.getElementById("popup-form").style.display = 'inline-block';
        addBook.value = "done";
        return
    }
    if (addBook.value == "done"){
        addBook.innerHTML = "ADD NEW BOOK"
        document.getElementById("popup-form").style.display = 'none';
        addBook.value = 'add';
        return
    }
}

addBook.addEventListener('click',openForm)

function storeValues(e){
    e.preventDefault()
    let title = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status');
    if(title=="" || author=="" ||pages==""){
        alert("Fill all the necessary details!")
    }
    else{
        myLibrary.push(new Book(title,author,pages,status.checked))
        addDB(new Book(title,author,pages,status.checked))
        document.getElementById('contact').reset()
        render()
    }
}

submit.addEventListener('click',storeValues)

function render(){
    library.innerHTML = '';
    for(let i=0;i<myLibrary.length;i++){
        if(myLibrary[i].isRead == true){
            library.innerHTML += `<div class="card"> \
            <div class="text">\
            <span class="main"><b>Book name:</b><p>${myLibrary[i].title}</p></span> \
            <span class="main"><b>Author's name:</b><p>${myLibrary[i].author}</p></span> \
            <span class="main"><b>No. of pages:</b><p>${myLibrary[i].pages}</p></span> \
            </div> \
            <div class="book-read"> \
            <span class="main"><em>I have read it.</em></span> \
            <a href="#"><i class="fa fa-check btn"></i></a> \
            <a href="#"><i class="fa fa-trash btn"></i></a> \
            </div> \
            </div>`
        }
        else if(myLibrary[i].isRead == false){
            library.innerHTML += `<div class="card"> \
            <div class="text">\
            <span class="main"><b>Book name:</b><p>${myLibrary[i].title}</p></span> \
            <span class="main"><b>Author's name:</b><p>${myLibrary[i].author}</p></span> \
            <span class="main"><b>No. of pages:</b><p>${myLibrary[i].pages}</p></span> \
            </div> \
            <div class="book-read"> \
            <span class="main"><em>I have'nt read it.</em></span> \
            <a href="#"><i class="fa fa-check btn"></i></a> \
            <a href="#"><i class="fa fa-trash btn"></i></a> \
            </div> \
            </div>`
        }
    }
    const buttons = document.getElementsByClassName("btn")
    Array.from(buttons).forEach(button => button.addEventListener("click",toggle));
}

function toggle(e){
    const button = e.target;
    if (button.classList.contains("fa-trash")){
        button.parentNode.parentNode.parentNode.remove()
        myLibrary.splice(button.parentNode.parentNode.parentNode,1)
    }
    else if(button.classList.contains("fa-check")){
        if(button.parentNode.parentNode.childNodes[1].firstChild.textContent === "I have'nt read it."){
            button.parentNode.parentNode.childNodes[1].firstChild.textContent = "I have read it."
        }
        else if(button.parentNode.parentNode.childNodes[1].firstChild.textContent === "I have read it."){
            button.parentNode.parentNode.childNodes[1].firstChild.textContent = "I have'nt read it."
        }
    }
}

