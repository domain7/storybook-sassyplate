/*


    Gulp Settings


*/



// Plugins
import {src, dest, parallel, series} from 'gulp';
import sourcemaps from 'gulp-sourcemaps'
import scss from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import rimraf from 'rimraf'


// Setup Directories
const dirs = {
  src: 'src',
  dest: 'dist',
}

// Setup Sources
const sources = {
  scss: `${dirs.src}/styles/**/*.+(sass|scss)`,
}

// Tasks Functions
export const clean = (cb) => {
  rimraf(dirs.dest + '/*', cb);
}

export const styles = () => {
  let plugins = [
    autoprefixer(),
  ]
  return src(sources.scss)
  .pipe(sourcemaps.init())
  .pipe(scss({outputStyle:'compressed'}))
  .pipe(postcss(plugins))
  .pipe(sourcemaps.write('./'))
  .pipe(dest(dirs.dest))
}

// Default Tasks
export const build = series(clean, parallel(styles));
