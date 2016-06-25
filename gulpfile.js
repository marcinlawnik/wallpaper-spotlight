var gulp = require('gulp');
var elixir = require('laravel-elixir');
var phpcs = require('gulp-phpcs');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//Configuration options

elixir.config.sourcemaps = false;

elixir(function(mix) {

    mix.styles([
        "cover.css",
        "bootstrap-image-gallery.min.css",
        "bootstrap-image-gallery.custom.css"
    ], 'public/css/all.css', 'resources/assets/css');

    mix.scripts([
        "bootstrap-image-gallery.min.js",
        "bootstrap-image-gallery.custom.js"
    ]);
    
    mix.task('phpcs');

});

//Gulp tasks not from elixir

gulp.task('phpcs', function () {
    return gulp.src([
            'app/**/*.php',
            'tests/**/*.php',
            '!vendor/**/*.*'
        ])
        // Validate files using PHP Code Sniffer
        .pipe(phpcs({
            bin: 'vendor/bin/phpcs',
            standard: 'PSR2',
            warningSeverity: 0
        }))
        // Log all problems that was found
        .pipe(phpcs.reporter('log'));
});

