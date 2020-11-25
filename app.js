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

console.log(chalk.black.bgGreen('Success!'))
