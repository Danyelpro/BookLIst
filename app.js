/*
                      //ES 5 CLASS
//Book Constructor
function Book(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
}

//UI Constructor
function UI () {}
//ADD BOOK TO LIST
UI.prototype.addBookToList = function(book){
const list = document.getElementById('book-list')
// Creat tr element
const row = document.createElement('tr');
//Insert Rows
row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href = "#" class ="delete">X</a></td>
`
list.appendChild(row);
}
//Show alert
UI.prototype.showAlert = function(message, className) {
    //Creat div   
    const div = document.createElement('div');
    //ADD CLASS 
    div.className = `alert ${className}`,
    //ADD TEXT
    div.appendChild(document.createTextNode(message));
    //GET PARENT
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    
 //Insert Alert
    container.insertBefore(div, form);

    //Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);


};
//Delete book
UI.prototype.deleteBook = function(target){
if (target.className === 'delete'){
target.parentElement.parentElement.remove();
}
}
//Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}



//Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', 
function(e){
    //GET FORM VALUES
const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;
       
     //INSTANTIATE BOOK
const book = new Book (title, author, isbn);
      //INSTANTIATE UI
const ui = new UI ();

//Validate
if(title === '' || author === '' || isbn === ''){
    //erroe alert
    ui.showAlert('Please fill in all field...', 'error')
} else{
          //ADD BOOK TO LIST
ui.addBookToList(book); 

//shpow alert
ui.showAlert('Book added', 'success ');
//clear Fields
ui.clearFields()
}


e.preventDefault();
})

//Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
      //INSTANTIATE UI
      const ui = new UI();
    
  //Delete Book
      ui.deleteBook(e.target)

     //show message 
     ui.showAlert('Book Removed', 'success');

    e.preventDefault();
}) 
 */
                    //ES6 CLAASS
          
 class Book {
constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    }
 }    
 
 class UI {
  addBookToList(book){
    const list = document.getElementById('book-list')
    // Creat tr element
    const row = document.createElement('tr');
    //Insert Rows
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class ="delete">X</a></td>
    `
    list.appendChild(row);
  } 

  showAlert(message, className){
    const div = document.createElement('div');
    //ADD CLASS 
    div.className = `alert ${className}`,
    //ADD TEXT
    div.appendChild(document.createTextNode(message));
    //GET PARENT
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    
 //Insert Alert
    container.insertBefore(div, form);

    //Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);

  }

  deleteBook(target){
    if (target.className === 'delete'){
        target.parentElement.parentElement.remove();
        }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

/*
//Local Storage Class
class Store {
     getBooks() {
        let books;
        if(localStorage.getItem('books') === null ) {
            books =[];
        } else {
            books =JSON.parse(localStorage.getItem('books')); 
        }

        return books;

    }

 displayBooks() {

    }

     addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));



    }

    removeBook() {

   }
}
*/
//Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', 
function(e){
    //GET FORM VALUES
const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;
       
     //INSTANTIATE BOOK
const book = new Book (title, author, isbn);
      //INSTANTIATE UI
const ui = new UI ();

//Validate
if(title === '' || author === '' || isbn === ''){
    //erroe alert
    ui.showAlert('Please fill in all field...', 'error')
} else{

          //ADD BOOK TO LIST
ui.addBookToList(book);

/*
//Add To LS
 Store.addBook(book);
*/

//shpow alert
ui.showAlert('Book added', 'success ');

//clear Fields
ui.clearFields()
}


e.preventDefault();
})

//Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
      //INSTANTIATE UI
      const ui = new UI();
      //Delete Book
      ui.deleteBook(e.target)

     //show message 
     ui.showAlert('Book Removed', 'success');

    e.preventDefault();
})