/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/style.css' : 'sass/_style.scss'
                                        
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
              
                 concat : {  
                     dist: {
                         src:['scripts/iteracija.js', 'scripts/tablica_mn.js'],
                         dest: 'scripts/mini.js'
                     }
                 },
                  uglify: {
                       dist: {
                         files: {
                             'scripts/mini.min.js': ['scripts/mini.js']
                             }
                         }
                    }    
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['watch', 'sass', 'concat', 'uglify']);
};


