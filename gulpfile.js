// npm install sass gulp-sass --save-dev

const { src, series, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();


function defaultTask(cb) {
	// place code for your default task here
	cb();
}

function scssTask() {
	return src('app/scss/styles.scss', { sourcemaps: true })
		.pipe(sass())
		.pipe(postcss([cssnano()]))
		.pipe(dest('dist', { sourcemaps: '.' }));
}
// Js
function jsTask() {
	return src('app/js/script.js', { sourcemaps: true })
		.pipe(terser())
		.pipe(dest('dist', { sourcemaps: '.' }));
}
//Browser sync, initialize local server
function browsersyncServeTask(cb) {
	browsersync.init({
		server: {
			baseDir: '.'
		}
	});
	cb();
}
//Browser sync relaod
function browsersyncReload(cb) {
	browsersync.reload();
	cb();
}

// watch Task
function watchTask() {
	watch('*.html', browsersyncReload); //for when we make changes in any html
	watch(['app/scss/**/*.scss', 'app/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}
// Gulp workflow
// Default Gulp
exports.default = series(
	scssTask,
	jsTask,
	browsersyncServeTask,
	watchTask
);