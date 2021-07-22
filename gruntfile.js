module.exports = function(grunt){
    grunt.initConfig({
         ts:{
             default: {
                 tsconfig: './tsconfig.json'
             }
         },
         tslint: {
            options: {
                // can be a configuration object or a filepath to tslint.json
                configuration: "tslint.json",
                // If set to true, tslint errors will be reported, but not fail the task
                // If set to false, tslint errors will be reported, and the task will fail
                force: true,
                fix: true
            },
            files: {
                src: [
                    "ts/**/*.ts"
                ]
            }
        },
        watch:{
            files: ['<%= tslint.files.src %>'],
            tasks: ['tslint', "ts"]
        }

    });
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default",["watch"]);
    grunt.registerTask("script",["tslint","ts"]);
}