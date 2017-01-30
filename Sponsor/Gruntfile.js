module.exports = function(grunt) {

 grunt.initConfig({
  exec: {
    clean_dist: {
      cmd:  'rm -rf dist/*'
    },
    copy_home: {
      cmd:  'cp -R dashboard/dist/* dist'
    },
    make_dist: {
      cmd:  'mkdir "dist/prm"'
    },
    copy_prm: {
      cmd:  'cp -Rf prm/dist/* dist/prm'
    },
    delete_vendorjs: {
      cmd:  'find dist/prm/scripts -type f -name "*vendor*" -exec rm {} +'
    },
    //delete_vendorcss: {
      //cmd:  'find dist/prm/styles -type f -name "*vendor*" -exec rm {} +'
    //}
  },  
 replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /src="scripts\/vendor/g,
			  replacement: function () {
				return 'src="../scripts/vendor'; 
			  }
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['dist/prm/index.html'], dest: 'dist/prm/'}
        ]
      }
    },
'copy-part-of-file': {
      simple_replace_scripts: {
          options: {
              sourceFileStartPattern: '<!-- masterblkstart -->',
              sourceFileEndPattern: '<!-- masterblkend -->',
              destinationFileStartPattern: '<!-- vendorblkstart -->',
              destinationFileEndPattern: '<!-- vendorblkend -->'
          },
          files: {
              'dist/prm/index.html': ['dist/index.html']
          }
      }
  },
'string-replace': {
  inline: {
    files: {
     'dist/': 'dist/index.html',
    },
    options: {
      replacements: [
        {
          pattern: '<!-- masterblkstart -->',
          replacement: '<!-- masterblkstart -->\r\n'
        },
        {
          pattern: '<!-- masterblkend -->',
          replacement: '\r\n<!-- masterblkend -->'
        }		
      ]
    }
  }
}  
});

  
	var cwd = process.cwd();
	process.chdir('../../');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-copy-part-of-file');
	grunt.loadNpmTasks('grunt-string-replace');
	process.chdir(cwd);
	grunt.registerTask('default', ['exec','string-replace','copy-part-of-file','replace']);
	
};