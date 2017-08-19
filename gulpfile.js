//constants 
const child = require('child_process');
const gulp = require('gulp');
const checkGem = require('gulp-check-gems');
const wait = require('gulp-wait');
const open = require('gulp-open');

//variables
const host = "0.0.0.0";
const port = 4094;

gulp.task('clean', function () {
    const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'clean'], {
        stdio: 'inherit'
    });
});

gulp.task('build', function () {
    const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'build', '--incremental'], {
        stdio: 'inherit'
    });
});

gulp.task('run', function () {
    const jekyll = child.spawn('bundle', [
        'exec',
        'jekyll',
        'serve',
        '--watch',
        '--incremental',
        '--force_polling',
        '--open-url',
        '--host', host,
        '--port', port
    ], {
        stdio: 'inherit'
    });
});

gulp.task('admin-run', function () {
    const jekyll = child.spawn('bundle', [
        'exec',
        'jekyll',
        'serve',
        '--incremental',
        '--force_polling',
        '--open-url',
        '--host', host,
        '--port', port
    ], {
        stdio: 'inherit'
    });
});

gulp.task('admin-site', function () {
    gulp.src(__filename)
            .pipe(checkGem({gemfile: 'jekyll-admin'}, open({uri: 'http://' + host + ':' + port + '/admin'})));
});

gulp.task('admin', ['clean', 'admin-run', 'admin-site']);

gulp.task('default', ['clean', 'run']);
