module.exports = function (grunt) {
  const child_process = require('child_process');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ts: {
      default : {
        tsconfig:true
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  
  grunt.registerTask("jasmine", function() {
    const done = this.async();
    child_process.exec("node ./node_modules/jasmine/bin/jasmine.js", {
      stdio: "inherit"
    }).on("close", (code) => {
      if(code) {
        grunt.log.error("failed");
        done(false);
      }

      grunt.log.ok("done");
      done();
    });
  });

  grunt.registerTask("verify", ["ts", "jasmine"]);
};