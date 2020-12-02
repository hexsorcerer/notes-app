const chalk = require('chalk')
const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicates = findDuplicates(notes, title)

    if (duplicates.length > 0) {
        console.log(chalk.red.inverse('Duplicate title found, note not added'))
    }
    else {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)

        console.log(chalk.green.inverse('Note added'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('Title not found, note not removed'))
    }
    else {
        saveNotes(notesToKeep)

        console.log(chalk.green.inverse('Note removed'))
    }
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

const findDuplicates = (notes, title) => {
    return notes.filter((note) => {
        return title === note.title
    })
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote
}