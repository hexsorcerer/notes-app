const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
fs.appendFileSync('notes.txt', '\n')
fs.appendFileSync('notes.txt', getNotes())
fs.appendFileSync('notes.txt', '\n')
fs.appendFileSync('notes.txt', 'Valid URL: ' + validator.isURL('https://github.com/hexsorcerer'))
fs.appendFileSync('notes.txt', '\n')

console.log(chalk.black.bgGreen('Success!'))
