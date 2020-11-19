const fs = require('fs')
const getNotes = require('./notes.js')

fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
fs.appendFileSync('notes.txt', '\n')
fs.appendFileSync('notes.txt', getNotes())