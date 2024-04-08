import { getNonArchived, getArchived } from '../data/dataApi'

let notesData = []
let notesArchiveData = []
async function fetchData() {
    notesData = await getNonArchived()
    notesArchiveData = await getArchived()
    renderLoadNote(notesData)
    renderArchiveNote(notesArchiveData)
}

// Memuat catatan dari localStorage saat aplikasi dimulai
const renderLoadNote = (notesData) => {
    const notesContainer = document.getElementById('notesContainer')

    if (Array.isArray(notesData)) {
        notesData.forEach((note) => {
            const noteElement = document.createElement('note-element')
            noteElement.dataset.id = note.id
            noteElement.dataset.title = note.title
            noteElement.dataset.body = note.body
            notesContainer.appendChild(noteElement)
        })
    } else {
        console.error('notesData is not an array or is undefined.')
    }
}

const renderArchiveNote = (notesData) => {
    const notesArchive = document.getElementById('notesArchive')

    if (Array.isArray(notesData)) {
        notesData.forEach((note) => {
            const noteElement = document.createElement('note-element')
            noteElement.dataset.id = note.id
            noteElement.dataset.title = note.title
            noteElement.dataset.body = note.body
            notesArchive.appendChild(noteElement)
        })
    } else {
        console.error('notesData is not an array or is undefined.')
    }
}
export default fetchData
