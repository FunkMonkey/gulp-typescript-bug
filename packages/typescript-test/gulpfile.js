const gulp = require('gulp');
const typescript = require( 'gulp-typescript' );

const tsProject = typescript.createProject( 'tsconfig.json' );

const SRC_GLOB =  './src/**/*.ts';
gulp.task( 'build', function() {
  return gulp.src( SRC_GLOB )
    .pipe( tsProject() )
    .pipe( gulp.dest( 'build' ) );
});
