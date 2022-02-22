import * as nodePath from 'path';
export const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `../src/main/resources/src`
const srcFolder = `./src`

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
