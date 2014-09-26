(function () {
    'use strict';

    module.exports = function ( grunt ) {

        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            // Before generating any new files, remove any previously-created files.
            clean: {
                build: ["build"]
            },
            // Copy existing files to 'build'
            copy: {
                bower_components: {
                    cwd: 'app/bower_components/',
                    src: '**',
                    dest: 'build/bower_components',
                    expand: true
                },
                js: {
                    cwd: 'app/scripts/',
                    src: '**',
                    dest: 'build/scripts',
                    expand: true
                },
                images: {
                    cwd: 'app/images/',
                    src: '**',
                    dest: 'build/images',
                    expand: true
                },
                json: {
                    cwd: 'app/json/',
                    src: '**',
                    dest: 'build/json',
                    expand: true
                }
            },
            // Compile jade files
            jade: {
                files: {
                    cwd: 'app/jade',
                    src: '**/*.jade',
                    dest: 'build/views',
                    ext: '.html',
                    expand: true
                },
                index: {
                    cwd: 'app',
                    src: 'index.jade',
                    dest: 'build',
                    ext: '.html',
                    expand: true
                }
            },
            // Compile sass files
            sass: {
                dist: {
                    options: {
                        noCache: true,
                        trace: true,
                        lineNumbers: true
                    },
                    files: [{
                        'build/styles/main.css':'app/sass/main.scss'
                    }]
                }
            },
            // Validate all the javascript files
            jshint: {
                all: ['Gruntfile.js', 'app/scripts/{,*/,*/*/}*.js']
            },
            // Inject all dependencies
            injector: {
                options: {
                    addRootSlash: true
                },
                local_dependencies: {
                    options: {
                        ignorePath: ['build']
                    },
                    files: {
                        'build/index.html': ['build/styles/main.css', 'build/scripts/app.js', 'build/scripts/**/*.module.js', 'build/scripts/**/*.js']
                    }
                },
                bower_dependencies: {
                    options: {
                        ignorePath: ['app'],
                        starttag: '<!-- bower_injector:{{ext}} -->',
                        endtag: '<!-- bower_endinjector -->'
                    },
                    files: {
                        'build/index.html': ['bower.json']
                    }
                }
            },
            // Watch for changes on files
            watch: {
                options: {
                    livereload: true
                },
                jade: {
                    files: ['app/index.jade', 'app/jade/**/*.jade'],
                    tasks: ['jade', 'injector']
                },
                sass: {
                    files: ['app/sass/**/*.scss'],
                    tasks: ['sass']
                },
                js: {
                    files: ['app/scripts/**/*.js'],
                    tasks: ['copy:js']
                },
                json: {
                    files: ['app/json/**/*.json'],
                    tasks: ['copy:json']
                }
            },
            // Bind the express server
            connect: {
                server: {
                    options: {
                        port: 9000,
                        hostname: 'localhost',
                        base: 'build',
                        open: {
                            target: 'http://localhost:9000'
                        },
                        livereload: true
                    }
                }
            }
        });

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-jade');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-injector');

        // Server Tasks
        grunt.registerTask('serve', [
            'clean',
            'copy',
            'jade',
            'sass',
            'injector',
            'jshint',
            'connect',
            'watch'
        ]);

        // By default
        grunt.registerTask('default', ['serve']);

    };

})();