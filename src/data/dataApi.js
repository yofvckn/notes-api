const api = 'https://notes-api.dicoding.dev/v2'

const getSingleNote = async (note_id) => {
    try {
        const response = await fetch(`${api}/notes/${note_id}`, {
            method: 'GET',
        })
        const responseJson = await response.json()

        const { status, message } = responseJson
        if (status !== 'success') {
            throw new Error(message)
        }
        const { data } = responseJson
        const statusNote = data.archived
        return statusNote
    } catch (error) {
        alert(error.message)
    }
}

const getNonArchived = async () => {
    showLoadingSpinner()
    try {
        const response = await fetch(`${api}/notes`, {
            method: 'GET',
        })
        const responseJson = await response.json()

        const { status, message } = responseJson
        if (status !== 'success') {
            throw new Error(message)
        }
        const { data } = responseJson
        setTimeout(() => hideLoadingSpinner(), 1000)
        return data
    } catch (error) {
        alert(error.message)
        setTimeout(() => hideLoadingSpinner(), 1000)
    }
}

const addNote = async (note) => {
    try {
        showLoadingSpinner()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        }
        const response = await fetch(`${api}/notes`, options)
        const responseJson = await response.json()

        const { status, message } = responseJson
        if (status !== 'success') {
            throw new Error(message)
        }
        const { data } = responseJson
        setTimeout(() => hideLoadingSpinner(), 1500)
        return data
    } catch (error) {
        alert(error.message)
        setTimeout(() => hideLoadingSpinner(), 1500)
    }
}

const removeNote = async (noteId) => {
    try {
        showLoadingSpinner()
        const options = {
            method: 'DELETE',
        }
        const response = await fetch(`${api}/notes/${noteId}`, options)
        const responseJson = await response.json()

        const { status, message } = responseJson
        if (status !== 'success') {
            throw new Error(message)
        }
        setTimeout(() => hideLoadingSpinner(), 1500)
    } catch (error) {
        alert(error.message)
        setTimeout(() => hideLoadingSpinner(), 1500)
    }
}

const getArchived = async () => {
    try {
        showLoadingSpinner()
        const response = await fetch(`${api}/notes/archived`, {
            method: 'GET',
        })
        const responseJson = await response.json()
        const { status, message } = responseJson
        if (status !== 'success') {
            throw new Error(message)
        }
        const { data } = responseJson
        setTimeout(() => hideLoadingSpinner(), 1500)
        return data
    } catch (error) {
        alert(error.message)
        setTimeout(() => hideLoadingSpinner(), 1500)
    }
}

const archiveNote = async (id) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(`${api}/notes/${id}/archive`, options)
        const responseJson = await response.json()
        const { status, message } = responseJson
        if (status !== 'success') {
            throw new Error(message)
        }
        console.log('archiveNote', status)
    } catch (error) {
        alert(error.message)
    }
}

const unArchiveNote = async (id) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(`${api}/notes/${id}/unarchive`, options)
        const responseJson = await response.json()
        const { status, message } = responseJson
        if (status !== 'success') {
            throw new Error(message)
        }
        console.log('unArchiveNote', status)
    } catch (error) {
        alert(error.message)
    }
}

const showLoadingSpinner = () => {
    document.getElementById('loadingSpinner').style.display = 'block'
}

const hideLoadingSpinner = () => {
    document.getElementById('loadingSpinner').style.display = 'none'
    console.log('hide loading jalan')
}

export {
    getNonArchived,
    addNote,
    removeNote,
    getArchived,
    archiveNote,
    unArchiveNote,
    getSingleNote,
}
