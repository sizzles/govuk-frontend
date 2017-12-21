'use strict'

const gulp = require('gulp')
const taskArguments = require('./task-arguments')
const del = require('del')

// Clean task for a specified folder --------------------
// Removes all old files, except for package.json
// and README in all package
// ------------------------------------------------------
const isPackages = (taskArguments.destination === 'packages') || false

gulp.task('clean', () => {
  return del.sync(isPackages ? [taskArguments.destination + '/**/**/*', '!' + taskArguments.destination, '!' + taskArguments.destination + '/*', '!' + taskArguments.destination + '/**/package.json', '!' + taskArguments.destination + '/all/README.md'] : [taskArguments.destination + '/**/*'])
})
