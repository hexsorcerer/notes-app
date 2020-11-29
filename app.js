const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv)).command({
    command: 'add <title> <note>',
    description: 'Add a new note',
    handler: function (argv) {
        fs.writeFileSync(argv.title, argv.note + '\n')
    }
})
.help()
.argv

yargs(hideBin(process.argv)).command({
    command: 'remote <title> <note>',
    description: 'Remove an existing note',
    handler: function (argv) {
        console.log('Removing the note')
    }
})
.help()
.argv

yargs(hideBin(process.argv)).command({
    command: 'list <title>',
    description: 'List all the notes',
    handler: function (argv) {
        console.log('Listing notes')
    }
})
.help()
.argv

console.log(chalk.black.bgGreen('Success!'))
