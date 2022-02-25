import dartSass from "sass";
import gulpSass from "gulp-sass";
import concat from "gulp-concat";

import groupCssMediaQueries from "gulp-group-css-media-queries";
import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";

const sassCompile = gulpSass(dartSass);

export const sass = () => {
  return app.gulp
    .src(app.path.src.sass, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SASS",
          message: "Erroe: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      sassCompile({
        outputStyle: "expanded",
      })
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpcss({
          webpClass: ".webp",
          noWebpClass: ".no-webp",
        })
      )
    )
    .pipe(concat("style.min.css"))
    .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};
