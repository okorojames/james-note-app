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