export const copy = () => {
    return app.gulp.src(app.path.src.files)
        .pipe(console.log(app.path.rootFolder))
        .pipe(app.gulp.dest(app.path.build.files))
}