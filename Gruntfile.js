'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      dist: 'dist/*.min.js',
    },

    uglify: {
      dist: {
        files: {
          'dist/react-intl-amd.min.js': [
            'dist/react-intl-amd.js'
          ],
        }
      },
      dist_with_locales: {
        files: {
          'dist/react-intl-with-locales-amd.min.js': [
            'dist/react-intl-with-locales-amd.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['clean', 'uglify']);
};
