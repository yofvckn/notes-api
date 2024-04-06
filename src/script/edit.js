import { notesData } from "../data/data.js";
import saveDataToLocalStorage from "./save-data.js";

// Fungsi untuk mengedit catatan
function editNote(id) {
  const noteElement = document.querySelector(`.note[data-id="${id}"]`);
  const title = noteElement.querySelector("h2").innerText;
  const body = noteElement.querySelector("p").innerText;
  Swal.fire({
    title: "Edit Note",
    html: `
        <input id="editedTitle" class="swal2-input" value="${title}" placeholder="Title">
        <textarea id="editedBody" class="swal2-textarea" placeholder="Note Body">${body}</textarea>
      `,
    showCancelButton: true,
    confirmButtonText: "Simpan",
    showLoaderOnConfirm: true,
    preConfirm: () => {
      const editedTitle = document.getElementById("editedTitle").value;
      const editedBody = document.getElementById("editedBody").value;
      if (!editedTitle || !editedBody) {
        Swal.showValidationMessage(
          "Please enter both title and body for the note."
        );
      }
      return { editedTitle: editedTitle, editedBody: editedBody };
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      const editedTitle = result.value.editedTitle;
      const editedBody = result.value.editedBody;
      noteElement.querySelector("h2").innerText = editedTitle;
      noteElement.querySelector("p").innerText = editedBody;
      const noteIndex = notesData.findIndex((note) => note.id === id);
      if (noteIndex !== -1) {
        notesData[noteIndex].title = editedTitle;
        notesData[noteIndex].body = editedBody;
        saveDataToLocalStorage();
      }
      Swal.fire({
        icon: "Berhasil!",
        title: "Note Diperbarui!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}

export default editNote;
