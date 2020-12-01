const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const notes = require('./notes.js')

yargs(hideBin(process.argv))
.command({
    command: 'add <title> <note>',
    description: 'Add a new note',
    handler: (argv) => {
        notes.addNote(argv.title, argv.note)
    }
})
.command({
    command: 'remove <title> <note>',
    description: 'Remove an existing note',
    handler: function (argv) {
        console.log('Removing the note')
    }
})
.command({
    command: 'list <title>',
    description: 'List all the notes',
    handler: function (argv) {
        console.log('Listing notes')
    }
})
.command({
    command: 'read <title> <note>',
    description: 'Read a note',
    handler: function (argv) {
        console.log('Reading note')
    }
})
.help()
.argv

console.log(chalk.black.bgGreen('Success!'))
