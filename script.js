const addBookButton = document.querySelector('.book-btn');
const cancelBtn = document.querySelector('.cancel');
const formContainer = document.querySelector('.form-container');
const form = document.getElementById('book-form')

let myLibrary = [];


function Book(title, author, pages, read) {
 this.title;
 this.author;
 this.pages;
 this.read;
}


function addBookLibrary() {

}



addBookButton.addEventListener('click', () => {
  

  if (form.style.display === 'none') {
    form.style.display = 'flex';
    formContainer.style.backgroundColor = '#265f5f'
    formContainer.style.borderBottom ='2px solid #ccc923'
  } 
  cancelBtn.addEventListener('click', () => {
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
  
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;

  console.log({title, author, pages, read});
});

