module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jscs: {
            options: {
                config: '.jscsrc'
            },
            src: [
                '**/*.js',
                '!node_modules/**'
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [
                '**/*.json',
                '**/*.js',
                '!node_modules/**'
            ]
        },
        mochaTest: {
            options: {
                reporter: 'list'
            },
            src: [
                'test/*.js'
            ]
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('lint', [
        'jshint:src',
        'jscs:src'
    ]);

    grunt.registerTask('test', ['lint']);
};
