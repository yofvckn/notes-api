import '../style/styles.css'
import fetchData from './load-note.js'

import './add.js'
import './delete.js'
import './edit.js'
import './home.js'

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
