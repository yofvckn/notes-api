import { notesData } from "../data/data";

// Memuat catatan dari localStorage saat aplikasi dimulai
const notesContainer = document.getElementById("notesContainer");
const pencarian = document.getElementById("pencarian");
pencarian.addEventListener("keyup", () => {
  const searchTerm = pencarian.value.toLowerCase();
  const filteredNotes = notesData.filter((note) =>
    note.title.toLowerCase().includes(searchTerm)
  );
  notesContainer.innerHTML = "";
  filteredNotes.forEach((note) => {
    const noteElement = document.createElement("note-element");
    noteElement.dataset.id = note.id;
    noteElement.dataset.title = note.title;
    noteElement.dataset.body = note.body;
    notesContainer.appendChild(noteElement);
  });
});

if (Array.isArray(notesData)) {
  notesData.forEach((note) => {
    const noteElement = document.createElement("note-element");
    noteElement.dataset.id = note.id;
    noteElement.dataset.title = note.title;
    noteElement.dataset.body = note.body;
    notesContainer.appendChild(noteElement);
  });
} else {
  console.error("notesData is not an array or is undefined.");
}
