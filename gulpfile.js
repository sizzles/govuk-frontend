'use strict'

const paths = require('./config/paths.json')
const gulp = require('gulp')
const taskListing = require('gulp-task-listing')
const sasslint = require('gulp-sass-lint')
const sass = require('gulp-sass')
const runsequence = require('run-sequence')
const gls = require('gulp-live-server')
const inject = require('gulp-inject')
const concat = require('gulp-concat')
const standard = require('gulp-standard')
const gtenon = require('gulp-tenon-client')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
// const cssnano = require('cssnano')
// const postcssnormalize = require('postcss-normalize')
const merge = require('merge-stream')
const replace = require('gulp-replace')
const flatten = require('gulp-flatten')
// const rename = require('gulp-rename')
const changed = require('gulp-changed')
const filter = require('gulp-filter')

// Create packages task -------------------
// Run all required tasks in sequence
// ----------------------------------------
gulp.task('create:packages', cb => {
  runsequence('scss:lint', 'prepare:files', 'prepare:packages', cb)
})

// Copy to temp ----------------------------
// Copies to temp/ & autoprefix scss
// -----------------------------------------
gulp.task('prepare:files', () => {
  let scssFiles = filter([paths.src + '**/*.scss'], {restore: true})
  return gulp.src(paths.src + '**/*')
    .pipe(changed(paths.packages))
    .pipe(scssFiles)
    .pipe(postcss([
      autoprefixer,
      require('postcss-nested')
    ], {syntax: require('postcss-scss')}))
    .pipe(scssFiles.restore)
    .pipe(gulp.dest(paths.temp))
})

// Create packages -----------------------
// Move relevant files & update readme
// ----------------------------------------
gulp.task('prepare:packages', () => {
  let readmeComponents = filter([paths.temp + 'components/**/*.md'], {restore: true})

  let components = gulp.src([paths.temp + 'components/**/*'])
    .pipe(changed(paths.packages))
    .pipe(replace('../../globals/scss', '@govuk-frontend/globals'))
    .pipe(replace('../', '@govuk-frontend/'))
    .pipe(readmeComponents)
    .pipe(replace('<!--', ''))
    .pipe(replace('-->', ''))
    .pipe(readmeComponents.restore)
    .pipe(flatten({includeParents: -1}))
    .pipe(gulp.dest(paths.packages))

  let readmeGlobals = filter([paths.temp + 'globals/**/*.md'], {restore: true})

  let globals = gulp.src([
    paths.temp + 'globals/scss/**/*',
    '!' + paths.temp + 'globals/scss/govuk-frontend.scss',
    '!' + paths.temp + 'globals/scss/govuk-frontend-oldie.scss'
  ])
    .pipe(changed(paths.packages))
    .pipe(replace('../../components', '@govuk-frontend'))
    .pipe(readmeGlobals)
    .pipe(replace('<!--', ''))
    .pipe(replace('-->', ''))
    .pipe(readmeGlobals.restore)
    .pipe(flatten({
      newPath: 'globals',
      includeParents: -1
    }))
    .pipe(gulp.dest(paths.packages))

  return merge(components, globals)
})

// Update dist ----------------------------
// Update dist with latest plus version.txt
// ----------------------------------------
gulp.task('update:dist', () => {
  let pkg = require('./' + paths.packages + 'all/package.json')
  let fs = require('fs')
  fs.writeFileSync(paths.dist + 'VERSION.txt', pkg.version)

  return gulp.src([paths.temp + '**/*', '!' + paths.temp + 'index.html'])
    .pipe(gulp.dest(paths.dist))
})

// Scss lint task -----------------------
// Check all is in order
// -----------------------------------------
gulp.task('scss:lint', () => {
  return gulp.src(paths.src + '**/*.scss')
    .pipe(sasslint({
      configFile: paths.config + '.sass-lint.yml'
    }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
})

// Scss lint task -----------------------
// Check all is in order
// -----------------------------------------
gulp.task('scss:compile', () => {
  let compile = gulp.src(paths.globalScss + 'govuk-frontend.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer
    ]))
    .pipe(gulp.dest(paths.previewCss))

  let compileOldIe = gulp.src(paths.globalScss + 'govuk-frontend-oldie.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      postcss([
        autoprefixer,
        require('oldie')({
          rgba: {filter: true},
          rem: {disable: true},
          unmq: {disable: true}
          // more rules go here
        })
      ])
    )
    .pipe(gulp.dest(paths.previewCss))

  return merge(compile, compileOldIe)
})

// Compile old IE compatible CSS ---------
// ---------------------------------------
// gulp.task('scss:compile:ie', () => {
//   let compileAllForOldIe = gulp.src(paths.distCss + '*-oldie.css')
//     .pipe(
//       postcss([
//         require('oldie')({
//           rgba: {filter: true},
//           rem: {disable: true},
//           unmq: {disable: true}
//           // more rules go here
//         })
//       ])
//     )
//     .pipe(gulp.dest(paths.distCss))
//
//   // oldie doesn't currently work when source is scss. author checking
//   // let prefixScssIe = gulp.src(paths.src + '**/*.scss')
//   //   .pipe(postcss([
//   //     autoprefixer,
//   //     require('oldie')({
//   //       rgba: {filter: true},
//   //       rem: {disable: true},
//   //       unmq: {disable: true}
//   //       // more rules go here
//   //     }),
//   //     require('postcss-nested')
//   //   ], {syntax: require('postcss-scss')}))
//   //   .pipe(gulp.dest(paths.dist))
//
//   return merge(compileAllForOldIe)
// })

// Styles build task ---------------------
// Compiles CSS from Sass
// Output both a minified and non-minified version into /public/stylesheets/
// ---------------------------------------
gulp.task('styles', cb => {
  runsequence('scss:lint', 'scss:compile', cb)
})

// Scripts build tasks --------------------
// Lints, compiles javascript partials
// ---------------------------------------
gulp.task('js:compile', () => {
  return gulp.src([paths.src + '**/*.js'])
    .pipe(concat('govuk-frontend.js'))
    .pipe(gulp.dest(paths.previewJs))
})

gulp.task('js:lint', () => {
  return gulp.src([paths.components + '**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})

gulp.task('scripts', cb => {
  runsequence('js:lint', 'js:compile', cb)
})

// Watch task ----------------------------
// When a file is changed, re-run the build task.
// ---------------------------------------
gulp.task('watch', () => {
  gulp.watch([paths.src + '**/**/*.scss'], ['styles'])
  gulp.watch([paths.src + '**/**/*.js'], ['scripts'])
  gulp.watch([paths.src + 'components/**/*.html'], ['preview:components'])
})

// Dev task ------------------------------
// Compiles assets and sets up watches.
// ---------------------------------------
gulp.task('dev', cb => {
  runsequence('styles',
              'scripts',
              'preview:components',
              'serve',
              'watch', cb)
})

// Serve task ---------------------------
// Creates a server to preview components
// ---------------------------------------
gulp.task('serve', () => {
  const server = gls.static(paths.preview, 8888)
  server.start()
})

// Preview components --------------------
// Combines all html files in components into a single  file
// Inserts compiled component css into the head of the page
// ---------------------------------------
gulp.task('preview:components', () => {
  gulp.src(paths.src + 'index.html')
  .pipe(inject(gulp.src([paths.components + '**/*.html']), {
    starttag: '<!-- inject:html -->',
    transform: function (filePath, file) {
      return '<div class="component">' + file.contents.toString('utf8') + '</div>'
    }
  }))
  .pipe(inject(gulp.src(paths.previewCss + '*-oldie.css', {read: false}), {starttag: '<!- - oldie:css - ->', endtag: '<!- - oldieend:css - ->', ignorePath: paths.preview}))
  .pipe(inject(gulp.src([paths.previewCss + '*.css', '!' + paths.previewCss + '*-oldie.css'], {read: false}), {name: 'head', ignorePath: paths.preview}))
  .pipe(inject(gulp.src([paths.previewJs + '*.js', paths.previewJs], {read: false}), {ignorePath: paths.preview}))
  .pipe(gulp.dest(paths.preview))
  gulp.start('copy:images')
})

// Tests ----------------
// ---------------------------------------
gulp.task('test', cb => {
  runsequence('html:tenon',
              'js:lint',
              'scss:lint',
              cb)
})

// Check HTML using Tenon ----------------
// ---------------------------------------
gulp.task('html:tenon', function () {
  gulp.src('src/components/**/*.html', {read: false})
  .pipe(gtenon({
    key: 'fc7b85e07ea9b862c6422e412e999f3b',
    snippet: true, // include errorSnippet in the console output
    filter: [
      3,  // Ignore: language of page is not set
      31, // Ignore: link uses an invalid hypertext reference
      64, // Ignore: page has no title
      97  // Ignore: page has no headings
    ]
  }))
})

// Copy images --------------------------
// Copy images to preview for component preview
// ---------------------------------------
gulp.task('copy:images', () => {
  return gulp.src(paths.globalImages + '**/*')
    .pipe(gulp.dest(paths.preview + 'images'))
})

// Default task --------------------------
// Lists out available tasks.
// ---------------------------------------
gulp.task('default', taskListing)
