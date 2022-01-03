const path = require('path');
const { readFilePromisified, writeFilePromisified } = require('./file');

const getReplaceMethod = type => {
    const map = {
        css: replaceCSS,
        js: replaceJS,
    };
    return map[type];
};

const replaceJS = (text, hashFile) => {
    return text.replace(
        `<script src="/index.js" type="module"></script>`,
        `<script src="/${hashFile}" type="module"></script>`,
    );
};

const replaceCSS = (text, hashFile) => {
    return text.replace(`<link rel="stylesheet" href="/index.css">`, `<link rel="stylesheet" href="/${hashFile}">`);
};

const replace = (text, fileName, type) => {
    const method = getReplaceMethod(type);
    return method(text, fileName);
};

const setHashToFile = async (filePath, files = []) => {
    const rootFolder = process.cwd();
    const htmlPath = path.resolve(rootFolder, filePath);

    let text = await readFilePromisified(htmlPath);
    files.forEach(async file => {
        const type = file.split('.')[1];
        const pathToFile = file.split('/')[1];
        text = replace(text, pathToFile, type);
    });
    return await writeFilePromisified(htmlPath, text);
};

module.exports = {
    setHashToFile,
};
