//
// DATE OPTIONS
// 
 const DateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
  // 
  // 
const dateCreated = document.querySelector('.date-created')
dateCreated.innerText += new Date().toLocaleString('en-US', DateOptions);
//
// 
const chevron = document.querySelector('.note-title-arrow-icon')
const noteBody = document.querySelector('.note-body')
chevron.addEventListener('click', () => {
  noteBody.classList.toggle('noteBodyToggle')
})
//
// 
const threeDots = document.querySelector('.three-dots-icon')
const editNoteIcon = document.querySelector('.edit-note-icon')
const deleteNoteIcon = document.querySelector('.delete-note-icon')
threeDots.addEventListener('click', function () {
  editNoteIcon.classList.toggle('showEditDeleteIcon')
  deleteNoteIcon.classList.toggle('showEditDeleteIcon')
})
//
// HAMBURGER FUNCTION
// 
const hamburger = document.querySelector('.hamburger');
const navSecondContent = document.querySelector('.nav-second-content');
const burgers = document.querySelectorAll('.burger')
const navCreateBtn = document.querySelector('.nav-create-btn')
hamburger.addEventListener('click', () => {
  navSecondContent.classList.toggle('onClickBurger')
  burgers.forEach(burger => {
    burger.classList.toggle('onClickBurger')
  })
})
// 
navCreateBtn.addEventListener('click', () => {
  burgers.forEach(burger => {
    burger.classList.remove('onClickBurger')
    navSecondContent.classList.remove('onClickBurger')
  })
})