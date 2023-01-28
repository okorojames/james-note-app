const createForm = document.querySelector(".create-note-form")
createForm.addEventListener("submit", createFormInfo)

let noteArray = JSON.parse(localStorage.getItem("notes")) || [];

function createFormInfo(e) {
  e.preventDefault();
  const noteTitle = e.target["create-note-title"].value.trim();
  const noteBody = e.target["create-note-body"].value.trim();
  let noteObject = {
    noteTitle,noteBody
  }
  noteArray.push(noteObject)
  localStorage.setItem("notes", JSON.stringify(noteArray))
  createForm.reset()
  location.assign("/index.html")
}