const textArea = document.querySelector(".editor__textarea--js");
const saveButton = document.querySelector(".editor__button--save-js");
const clearButton = document.querySelector(".editor__button--clear-js");
const notesList = document.querySelector(".notes__list--js");

const notesStorageKey = "notes";
const separator = "-LS@#%$-";

function renderNotesList(notes) {
  console.log(notesList);
  notesList.innerHTML = "";
  for (let note of notes) {
    notesList.innerHTML += `<li class=\"notes__list-item\">${note}</li>`;
  }
}

let notes;
if (localStorage.getItem(notesStorageKey)) {
  notes = localStorage.getItem(notesStorageKey).split(separator);
} else {
  localStorage.setItem(notesStorageKey, []);
  notes = [];
}

console.log(notes);

saveButton.addEventListener("click", e => {
  notes.push(textArea.value);
  localStorage.setItem(notesStorageKey, notes.join(separator));
  renderNotesList(notes);
  textArea.value = "";
});

clearButton.addEventListener("click", e => {
  localStorage.removeItem(notesStorageKey);
  notes = [];
  renderNotesList(notes);
  textArea.value = "";
});

renderNotesList(notes);
