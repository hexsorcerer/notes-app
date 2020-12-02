const chalk = require('chalk')
const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)

    console.log(chalk.green.inverse('Note added'))
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    saveNotes(notesToKeep)

    console.log(chalk.green.inverse('Note removed'))
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
    addNote: addNote,
    removeNote: removeNote
}