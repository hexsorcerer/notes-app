const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const saveNotes = (notes) => {
    const notesAsJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesAsJson)
}

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync('notes.json')
        const bufferAsString = buffer.toString()
        return JSON.parse(bufferAsString)
    }
    catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote
}