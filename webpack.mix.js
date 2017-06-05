const {mix} = require('laravel-mix');

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

mix .sass('resources/assets/sass/app.scss', 'public/css')
    .less('resources/assets/less/admin.less', 'public/css')
    .combine([
        'resources/assets/js/plugins/jQuery/jquery-2.2.3.min.js',
        'resources/assets/js/plugins/jQueryUI/jquery-ui.min.js',
        'resources/assets/js/plugins/bootstrap/bootstrap.js',
        'resources/assets/js/plugins/raphael-min.js',
        'resources/assets/js/plugins/morris/morris.min.js',
        'resources/assets/js/plugins/sparkline/jquery.sparkline.min.js',
        'resources/assets/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        'resources/assets/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        'resources/assets/js/plugins/knob/jquery.knob.js',
        'resources/assets/js/plugins/daterangepicker/moment.min.js',
        'resources/assets/js/plugins/daterangepicker/daterangepicker.js',
        'resources/assets/js/plugins/datepicker/bootstrap-datepicker.js',
        'resources/assets/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
        'resources/assets/js/plugins/slimScroll/jquery.slimscroll.min.js',
        'resources/assets/js/plugins/fastclick/fastclick.js',
        'resources/assets/js/plugins/iCheck/icheck.js',
        'resources/assets/js/plugins/app.js',
        'resources/assets/js/plugins/demo.js',
    ], 'public/js/main.js')
    .styles([
        'resources/assets/js/plugins/iCheck/all.css'
    ], 'public/css/plugins.css')

    .options({processCssUrls: false});
