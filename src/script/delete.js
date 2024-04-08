import { removeNote } from '../data/dataApi'

// Fungsi untuk menghapus catatan
async function deleteNote(id) {
    const noteElement = document.querySelector(`.note[data-id="${id}"]`)
    const confirmation = confirm('Apakah Kamu Yakin Ingin Menghapus Note?')
    if (confirmation) {
        removeNote(id)
        noteElement.parentNode.removeChild(noteElement)
        alert('Catatan berhasil dihapus!')
    }
}

export default deleteNote
