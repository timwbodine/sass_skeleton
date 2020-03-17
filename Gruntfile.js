module.exports = function(grunt) { 
    grunt.initConfig({
        watch: {
            sass: {
              files: '**/*.sass',
              tasks: ['sass'],
              options: {
                livereload: 35729
              }
            },
						bake: {
							files: ["html/**"],
							tasks: "bake:build"
						},
            all: { files: ['**/*.html'], options: { livereload: true } } 
        },
        sass: { dev: { files: { 'css/main.css':'sass/main.sass' } } },
				bake: {
					build: {
							files: {
								"html/index.html" : "html/base.html"
							}
					}
				}

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks( "grunt-bake" );
};
