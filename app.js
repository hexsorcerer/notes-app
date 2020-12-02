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
    command: 'list <title>',
    description: 'List all the notes',
    handler(argv) {
        console.log('Listing notes')
    }
})
.command({
    command: 'read <title> <note>',
    description: 'Read a note',
    handler(argv) {
        console.log('Reading note')
    }
})
.help()
.argv
