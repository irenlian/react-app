const fs = require('fs');
const esbuild = require('esbuild');
const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');
const { NodeGlobalsPolyfillPlugin } = require('@esbuild-plugins/node-globals-polyfill');

const env = require('./plugins/env');
const { setHashToFile } = require('./utils/html');

const isVerbose = process.argv.includes('--verbose');

const build = async () =>
    esbuild.build({
        entryPoints: ['src/index.tsx'],
        entryNames: '[dir]/[name]-[hash]',
        outdir: 'dist',
        bundle: true,
        splitting: true,
        // TODO do we need source map for build version?
        sourcemap: false,
        target: 'es6',
        format: 'esm',
        logLevel: 'debug',
        define: {
            global: 'window',
        },
        metafile: true,
        minify: true,
        plugins: [NodeModulesPolyfillPlugin(), env(), NodeGlobalsPolyfillPlugin({ buffer: true })],
    });

(async () => {
    const result = await build();
    const { outputs } = result.metafile;
    const files = Object.keys(outputs);
    const indexHTML = files.find(f => f.startsWith('dist/index') && f.endsWith('.js'));
    const indexCSS = files.find(f => f.startsWith('dist/index') && f.endsWith('.css'));
    const htmlEntryFile = 'dist/index.html';
    try {
        await setHashToFile(htmlEntryFile, [indexHTML, indexCSS]);
    } catch (e) {
        console.log(`Something went wrong during inserting hashed path from: ${indexHTML}, to ${htmlEntryFile}.`);
        console.error(e);
    }
    if (isVerbose) {
        fs.writeFileSync('meta.json', JSON.stringify(result.metafile));
    }
})();
