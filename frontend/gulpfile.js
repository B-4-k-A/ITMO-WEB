import gulp from 'gulp';

import {path} from "./gulp/config/path.js";

import {plugins} from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path,
    gulp,
    plugins,

}

import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {sass} from "./gulp/tasks/sass.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.sass, sass)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(copy, html, sass, js, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

const build = gulp.series(reset, mainTasks);


export { dev }
export { build }

gulp.task('default', dev);
