module.exports = function(grunt){
	grunt.initConfig({
	sass: {
		dist: {
		  files: {
			'css/main.css': 'sass/main.scss'
		  }
		}
	  },
	  watch: {
		  css: {
			files: 'sass/**/*.scss',
			tasks: ['sass'],
			options: {
			  livereload: true,
			},
		  },
		},
	});

	
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
};