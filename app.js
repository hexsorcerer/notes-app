const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const notes = require('./notes.js')

yargs(hideBin(process.argv))
.command({
    command: 'add <title> <note>',
    description: 'Add a new note',
    handler(argv) {
        notes.addNote(argv.title, argv.note)
    }
})
.command({
    command: 'remove <title>',
    description: 'Remove an existing note',
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
.command({
    command: 'list',
    description: 'List all the notes',
    handler(argv) {
        notes.listNotes()
    }
})
.command({
    command: 'read <title>',
    description: 'Read a note',
    handler(argv) {
        notes.readNote(argv.title)
    }
})
.help()
.argv
