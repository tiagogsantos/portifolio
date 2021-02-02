const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix

    .styles('resources/views/front/assets/css/style.css', 'public/front/assets/css/style.css')

    .styles([
        'resources/views/front/assets/css/plugins/bootstrap.min.css',
        'resources/views/front/assets/css/plugins/font-awesome.css',
        'resources/views/front/assets/css/plugins/magnific-popup.css',
        'resources/views/front/assets/css/plugins/simplebar.css',
        'resources/views/front/assets/css/plugins/owl.carousel.min.css',
        'resources/views/front/assets/css/plugins/owl.theme.default.min.css',
        'resources/views/front/assets/css/plugins/jquery.animatedheadline.css',
    ], 'public/front/assets/css/vendor.css')


    .styles([
        'resources/views/front/assets/css/settings/left-nav.css',
        'resources/views/front/assets/css/settings/green-color.css',
        'resources/views/front/assets/css/settings/left-nav.css.css',
    ], 'public/front/assets/css/color-theme.css')

    .scripts([
        'resources/views/front/assets/js/jquery.min.js',
        'resources/views/front/assets/js/isotope.pkgd.min.js',
        'resources/views/front/assets/js/bootstrap.min.js',
        'resources/views/front/assets/js/simplebar.js',
        'resources/views/front/assets/js/owl.carousel.min.js',
        'resources/views/front/assets/js/jquery.magnific-popup.min.js',
        'resources/views/front/assets/js/jquery.animatedheadline.min.js',
        'resources/views/front/assets/js/jquery.easypiechart.js',
        'resources/views/front/assets/js/jquery.validation.js',
        'resources/views/front/assets/js/tilt.js',
        'resources/views/front/assets/js/jquery.validation.js',
    ], 'public/front/assets/js/vendor.js')


    .scripts([
        'resources/views/front/assets/js/main.js'
    ], 'public/front/assets/js/main.js')

    .copyDirectory('resources/views/front/assets/fonts', 'public/front/assets/fonts')
    .copyDirectory('resources/views/front/assets/img', 'public/front/assets/img')

    .options({
        processCssUrls: false
    })

    .version();


