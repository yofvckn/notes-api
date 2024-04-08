import { addNote } from '../data/dataApi'

// Fungsi untuk menambahkan catatan baru
const tambahNote = async () => {
    const judulNote = document.getElementById('judulNote').value
    const isiNote = document.getElementById('isiNote').value

    if (judulNote && isiNote) {
        const noteId = 'notes-' + Math.random().toString(36).substr(2, 9)
        const newNote = { title: judulNote, body: isiNote }
        await addNote(newNote)
        const noteElement = document.createElement('note-element')
        noteElement.dataset.id = noteId
        noteElement.dataset.title = judulNote
        noteElement.dataset.body = isiNote
        const notesContainer = document.getElementById('notesContainer')
        notesContainer.appendChild(noteElement)

        document.getElementById('judulNote').value = ''
        document.getElementById('isiNote').value = ''
        Swal.fire({
            icon: 'success',
            title: 'Catatan Berhasil Ditambahkan!',
            showConfirmButton: false,
            timer: 1300,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Waduhh! Sepertinya Ada yang Kurang nih...',
            text: 'Harap Masukkan Judul dan Isi Note!.',
        })
    }
    // }
}

export default tambahNote
