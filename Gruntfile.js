module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ts')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.initConfig({
    ts: {
      lawn: {                                 // a particular target
        src: ["user.ts"],        // The source typescript files, http://gruntjs.com/configuring-tasks#files
        //out: 'user.js',             // If specified, generate an out.js file which is the merged js file
        options: {                    // use to override the default options, http://gruntjs.com/configuring-tasks#options
          target: 'es5',            // 'es3' (default) | 'es5'
          module: 'commonjs',       // 'amd' (default) | 'commonjs'
          sourcemap: false,          // true  (default) | false
          declaration: true,       // true | false  (default)
          verbose: true,
          removeComments: true
        }
      }
    },
    watch: {
      lib: {
        files: 'user.ts',
        tasks: ['default']
      }
    }
  })

  grunt.registerTask('default', 'ts');

}