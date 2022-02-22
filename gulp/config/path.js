import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./src/main/resources/src`
const srcFolder = `./source`

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}
