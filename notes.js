const chalk = require('chalk')
const fs = require('fs')

/**
 * Adds the note with the given title and body to a file named notes.json. If a
 * note with the given title already exists, it is not added.
 * @param {string} title The title of the note to add.
 * @param {string} body The body of the note to add.
 */
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

/**
 * Removes a note from the file notes.json. If a note with the given title does
 * not exist, it is not removed.
 * @param {string} title The title of the note to remove.
 */
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

/**
 * Prints a list of all note titles from the file notes.json.
 */
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes:'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

/**
 * Prints the body of the note with the given title from the file notes.json.
 * @param {string} title 
 */
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => {
        return note.title === title
    })

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

/**
 * Saves the given notes to a file named notes.json.
 * @param {object} notes The notes to save.
 */
const saveNotes = (notes) => {
    const notesAsJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesAsJson)
}

/**
 * Loads the notes from a file names notes.json.
 */
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

/**
 * Looks for a note with the given title, in the given notes. Returns any
 * that are found.
 * @param {object} notes The notes to check.
 * @param {string} title The title to look for.
 */
const findDuplicates = (notes, title) => {
    return notes.filter((note) => {
        return title === note.title
    })
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}