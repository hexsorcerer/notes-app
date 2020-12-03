# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.9.0] - 2020-12-02
### Added
- The list note command is now working as it should

## [0.8.0] - 2020-12-01
### Added
- The add note command has a new success message
- The remove note command has a new success message
- Adding a new note now checks for duplicate titles, and fails if one is found
- Removing a note now shows a fail message if the title isn't found
- Now with more comments!

### Removed
- The default success message has been replaced by the new custom messages
- Some unneccessary vertical whitespace (for devs only)

## [0.7.0] - 2020-11-30
### Changed
- The add note command now works!
- The remove note command now works!

## [0.6.0] - 2020-11-29
### Added
- A new command 'remove' (placeholder)
- A new command 'list' (placeholder)
- A new command 'read' (placeholder)
- Help menu descriptions for all commands
- Readme instructions for new commands

## [0.5.1] - 2020-11-24
### Added
- Added new instructions on how to run the application

### Changed
- Changed the Docker instructions to emphasize deprecation

### Removed
- Removed notes.js, it was no longer being used

## [0.5.0] - 2020-11-24
### Added
- Add yargs package
- Add new command 'add' to add a note

## Changed
- Updated the version number
- Also updated the version number in the package.json file
- This had been missed in previous releases, my bad ^_^

### Removed
- Removed validator package

## [0.4.0] - 2020-11-19
### Added
- Add chalk package
- Write success message to stdout

## [0.3.1] - 2020-11-19
### Added
- Add npm command to Dockerfile
- package-lock updated to file version 2

## [0.3.0] - 2020-11-19
### Added
- Add npm package file
- Add validator
- Write additional line to output file

## [0.2.2] - 2020-11-19
### Added
- Add missing release notes for 0.2.1 (my bad)

## [0.2.1] - 2020-11-18
### Added
- Add changelog
- Add output file 'notes.txt' to gitignore
- Add usage notes to readme

## [0.2.0] - 2020-11-18
### Added
- New notes module

### Changed
- Output contains an additional line, which is printed from notes

## [0.1.0] - 2020-11-17
### Added
- Add Dockerfile
- Add docker-compose file
- Add main application
- Add GPL3 license
- Add README