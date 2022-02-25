import fileInclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

/* 
  if this task get out Error: Callback called multiple times
  take sure that img tag in html was written in one line

*/

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(fileInclude())
    .pipe(app.plugins.if(app.isDev, app.plugins.replace(/@img\//g, "img/")))
    .pipe(app.plugins.if(app.isBuild, app.plugins.replace(/@img\//g, "static/img/")))
    .pipe(app.plugins.if(app.isDev, app.plugins.replace(/@sass\//g, "css/")))
    .pipe(app.plugins.if(app.isBuild, app.plugins.replace(/@sass\//g, "static/css/")))
    .pipe(app.plugins.if(app.isDev, app.plugins.replace(/@js\//g, "js/")))
    .pipe(app.plugins.if(app.isBuild, app.plugins.replace(/@js\//g, "static/js/")))
    .pipe(app.plugins.if(app.isDev, app.plugins.replace(/@file\//g, "files/")))
    .pipe(app.plugins.if(app.isBuild, app.plugins.replace(/@file\//g, "static/files/")))
    // .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          value: "%DT%",
          append: {
            key: "_v",
            cover: 0,
            to: ["css", "js"],
          },
          output: {
            file: "gulp/version.json",
          },
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};
