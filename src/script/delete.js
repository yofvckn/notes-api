// Fungsi untuk menghapus catatan
function deleteNote(id) {
  const noteElement = document.querySelector(`.note[data-id="${id}"]`);
  const confirmation = confirm("Apakah Kamu Yakin Ingin Menghapus Note?");
  if (confirmation) {
    noteElement.parentNode.removeChild(noteElement);
    alert("Catatan berhasil dihapus!");
  }
}

export default deleteNote;
