module.exports = function(grunt) {
    // grunt.registerTask('test_grunt', () => {
    //     console.log('grunt ready')
    // })
    // grunt.registerTask('task2', () => {
    //     console.log('task2')
    // })
    // grunt.registerTask('default', ['test_grunt', 'task2'])

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-jsonmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    const mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        htmlmin: {                                     // Task
          dist: {                                      // Target
            options: {                                 // Target options
              removeComments: true,
              collapseWhitespace: true
            },
            files: {                                   // Dictionary of files
              'dist/index.html': 'src/index.html',     // 'destination': 'source'
            }
          }
        },
        uglify: {
            my_target: {
              files: {
                'dist/scripts/scripts.js': ['src/scripts/scripts.js']
              }
            }
          },
          cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                'dist/style.css': ['src/style.css'],
                'dist/normalize.css': ['src/normalize.css']
              }
            }
          },
          imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [mozjpeg()] // Example plugin usage
                },
                files: {
                    'dist/images/alien.jpg': 'src/images/alien.jpg',
                    'dist/images/artist.jpg': 'src/images/artist.jpg',
                    'dist/images/back.jpg': 'src/images/back.jpg',
                    'dist/images/bobine.png': 'src/images/bobine.png',
                    'dist/images/fast.jpeg': 'src/images/fast.jpeg',
                    'dist/images/faucon.jpg': 'src/images/faucon.jpg',
                    'dist/images/hangover.jpg': 'src/images/hangover.jpg',
                    'dist/images/id.jpg': 'src/images/id.jpg',
                    'dist/images/inception.jpg': 'src/images/inception.jpg',
                    'dist/images/jurassic.jpeg': 'src/images/jurassic.jpeg',
                    'dist/images/matrix.jpeg': 'src/images/matrix.jpeg',
                    'dist/images/ryan.jpg': 'src/images/ryan.jpg',
                    'dist/images/sisters.jpeg': 'src/images/sisters.jpeg',
                    'dist/images/swars.jpeg': 'src/images/swars.jpeg',
                    'dist/images/swars8.jpg': 'src/images/swars8.jpg',
                    'dist/images/warrior.jpg': 'src/images/warrior.jpg',
                }
            }
        },
        jsonmin: {
            dev: {
              options: {
                stripWhitespace: true || false,
                stripComments: true || false
              },
              files: {
                "dist/data/movies.json" : "src/data/movies.json",
              }
            }
          },
          clean: {
            build: {
              src: ['dist/']
            }
          }
    })
grunt.registerTask('default', ['clean', 'htmlmin', 'uglify', 'cssmin', 'imagemin', 'jsonmin'])
  };