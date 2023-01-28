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
// const dateCreated = document.querySelector('.date-created')
// dateCreated.innerText += new Date().toLocaleString('en-US', DateOptions);
//
// 
// const chevron = document.querySelector('.note-title-arrow-icon')
// const noteBody = document.querySelector('.note-body')
// chevron.addEventListener('click', () => {
//   noteBody.classList.toggle('noteBodyToggle')
// })
//
// 
// const threeDots = document.querySelector('.three-dots-icon')
// const editNoteIcon = document.querySelector('.edit-note-icon')
// const deleteNoteIcon = document.querySelector('.delete-note-icon')
// threeDots.addEventListener('click', function () {
//   editNoteIcon.classList.toggle('showEditDeleteIcon')
//   deleteNoteIcon.classList.toggle('showEditDeleteIcon')
// })
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
const noteContainer = document.querySelector(".notes-section-container");
console.log(noteContainer)

let noteArray = JSON.parse(localStorage.getItem("notes"))
noteArray.forEach(note => {
  const notes = document.createElement('div')
  notes.innerHTML += `

        <div class="note-holder">
        <!-- TITLE -->
        <div class="note-title">
          <h4 class="note-title-h4">Title: <span class="note--title">${note.noteTitle}</span></h4>
          <i class="ri-arrow-down-s-line note-title-arrow-icon" title="click to show note body"></i>
        </div>
        <!--  -->
        <!-- BODY -->
        <div class="note-body">
          <h4 class="node-body-h4">Note: <p class="note-body-note"> ${note.noteBody} </p></h4>
        </div>
        <!--  -->
        <!-- FOOTER -->
        <div class="footer-creation-date">
          <p class="footer-p">created on: <span class="date-created"></span></p>
          <div class="edit-note-delete">
            <i class="ri-pencil-line edit-note-icon"></i>
            <i class="fa-solid fa-trash delete-note-icon"></i>
            <i class="fa-solid fa-ellipsis-vertical three-dots-icon"></i>
          </div>
        </div>
      </div>
  
  `
  noteContainer.appendChild(notes)
})

document.querySelector('.notes-total-number').textContent = `(${noteArray.length})`
console.log(noteArray)