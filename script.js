const addBookButton = document.querySelector('.book-btn');
const cancelBtn = document.querySelector('.cancel');
const formContainer = document.querySelector('.form-container');
const form = document.getElementById('book-form');

let myLibrary = [];



function Book(title, author, pages, status) {

   this.title = title;
   this.author = author; 
   this.pages = pages;
   this.status = status;
}




function addBookLibrary() {

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').value;
   
  let newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
  console.log(myLibrary);

}



addBookButton.addEventListener('click', () => {
  

  if (form.style.display === 'none') {
    form.style.display = 'flex';
    formContainer.style.backgroundColor = '#265f5f'
    formContainer.style.borderBottom ='2px solid #ccc923'
  } 
  cancelBtn.addEventListener('click', () => {
    form.reset();
    form.style.display = 'none';
    formContainer.style.backgroundColor = '';
    formContainer.style.border = 'none';
  })
})

const formValidator = () => {
 
}

document.getElementById('submit').addEventListener('click', function() {
  form.style.display = 'none';
    formContainer.style.backgroundColor = '';
    formContainer.style.border = 'none';
  event.preventDefault();
  addBookLibrary()
  form.reset();
});

