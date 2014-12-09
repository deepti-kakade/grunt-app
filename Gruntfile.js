module.exports = function(grunt) {
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  concat: {
    options:{
      separator: ';',
    },
    dist: {
      src:['src/js/bootstrap.js', 'src/js/jquery.form.js', 'src/js/jquery.history.js', 'jquery.js'],
      dest:'dest/built.js'
    }
  },
  uglify: {
    build: {
      files:{
        'dest/all.min.js': ['dest/built.js']
      }
    }
  },
  cssmin: {
    combine: {
      src: ['src/css/templatemo_style.css', 'src/css/common.css'],
      dest: 'dest/all.css.min'
    }
  },
  smoosher: {
    all:{
      options: {
        jsDir: "dest/all.min.js",
        cssDir: "dest/all.min.css"
      },
      files:{
        'dest/index.html': 'src/index.html'
      }
    }
  },
  copy:{
    options:{
      'dest/': ['src/images']
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-html-smoosher');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'smoosher', 'copy'])

};