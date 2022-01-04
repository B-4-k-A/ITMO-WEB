const {src, dest, watch} = require('gulp');
const compileSass = require('gulp-sass')(require('node-sass'));
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

// compileSass.compiler = require('node-sass');

const _dev = {
    src: './src/main/resources/#source/',
    dest: './src/main/resources/source/css/'
};

const _pages = {
    index: {
        name: 'index.css',
        blocks: ['header']
    }
}


const bundle = (page) => {
    const pageInfo = _pages[page]
    let blocksPath = pageInfo.blocks.map(
        it => _dev.src + it + '/*.sass'
    );
    return src(blocksPath)
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(sourceMaps.init())
        .pipe(minifyCss())
        .pipe(sourceMaps.write())
        .pipe(concat(pageInfo.name))
        .pipe(dest(_dev.dest));
};

const bundleIndex = () => {
    return bundle('index')
}

const watchIndex = () => {
    watch(_dev.src, bundleIndex);
};

exports.bundleIndex = bundleIndex;
exports.watchIndex = watchIndex;