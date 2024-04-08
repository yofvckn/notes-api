import { archiveNote, unArchiveNote, getSingleNote } from '../data/dataApi'

// Fungsi untuk mengedit catatan
async function archive(id) {
    await archiveNote(id)
}
async function unarchive(id) {
    await unArchiveNote(id)
}
async function editNote(id) {
    const status = await getSingleNote(id)
    console.log(status)
    Swal.fire({
        title: 'Edit Note',
        html: `
        <p>Apakah anda yakin ingin merubah status catatan?</p>
      `,
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            if (status === false) {
                archive(id)
            } else {
                unarchive(id)
            }
            Swal.fire({
                icon: 'Berhasil!',
                title: 'Note Diperbarui!',
                showConfirmButton: false,
                timer: 1500,
            })
            setTimeout(() => window.location.reload(), 1000)
        }
    })
}

export default editNote
