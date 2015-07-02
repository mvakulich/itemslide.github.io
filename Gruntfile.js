module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            regular: {
                options : {
                  compress : false,
                  beautify: true
                },
                files: {
                    'dist/itemslide.min.js': ['src/requestAnimationFrame.js', 'src/itemslide.js', 'src/slideout.js']
                }
            },
            vanilla: {
                files: {
                    'dist/itemslide.vanilla.min.js': ['src/requestAnimationFrame.js', 'src/vanilla.js', 'src/itemslide.js', 'src/slideout.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

};
