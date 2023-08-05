const addBookButton = document.querySelector('.book-btn')
const cancelBtn = document.querySelector('.cancel')

let myLibrary = [];


function Book() {

}


function addBookLibrary() {

}



addBookButton.addEventListener('click', () => {
  const form = document.getElementById('book-form')

  if (form.style.display === 'none') {
    form.style.display = 'block';
  } 
  cancelBtn.addEventListener('click', () => {
    form.style.display = 'none';
  })
})

