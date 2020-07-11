let addBook = document.getElementById('New-book')
let submit = document.getElementById('submit')
let library = document.getElementById('card-container')

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
    if(title=="" || author=="" || pages==""){
        alert("Fill the form properly")
    }
    else{
        document.getElementById('contact').reset()
        if(status.checked){
            myLibrary.push(new Book(title,author,pages,true))
        }
        else{
            myLibrary.push(new Book(title,author,pages,false))
        }
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
            <span class="main"><h4>Book name:</h4><p>${myLibrary[i].title}</p></span> \
            <span class="main"><h4>Author's name:</h4><p>${myLibrary[i].author}</></span> \
            <span class="main"><h4>No. of pages:</h4><p>${myLibrary[i].pages}</p></span> \
            <div class="book-read">\
            <span class="main"><h4>I have read it.</h4></span> \
            <a href="#"><i class="fa fa-check btn"></i></a> \
            <a href="#"><i class="fa fa-trash btn"></i></a> \
            </div> \
            </div> \
            </div>`
        }
        else{
            library.innerHTML += `<div class="card"> \
            <div class="text">\
            <span class="main"><h4>Book name:</h4><p>${myLibrary[i].title}</p></span> \
            <span class="main"><h4>Author's name:</h4><p>${myLibrary[i].author}</p></span> \
            <span class="main"><h4>No. of pages:</h4><p>${myLibrary[i].pages}</p></span> \
            <span class="main"><h4>I have'nt read it.</h4></span> \
            <div class="book-read"> \
            <a href="#"><i class="fa fa-check btn"></i></a> \
            <a href="#"><i class="fa fa-trash btn"></i></a> \
            </div> \
            </div> \
            </div>`
        }
    }
}