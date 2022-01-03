const esbuild = require('esbuild');
const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');
const { NodeGlobalsPolyfillPlugin } = require('@esbuild-plugins/node-globals-polyfill');
const bs = require('browser-sync').create();

const env = require('./plugins/env');

const build = async () => {
    await esbuild.build({
        entryPoints: ['src/index.tsx'],
        outdir: 'dist',
        bundle: true,
        splitting: false,
        sourcemap: true,
        format: 'esm',
        target: 'es6',
        define: {
            global: 'window',
        },
        watch: {
            onRebuild() {
                bs.reload();
            },
        },
        plugins: [NodeModulesPolyfillPlugin(), NodeGlobalsPolyfillPlugin({ buffer: true }), env()],
    });
    await bs.init({
        port: 4000,
        server: './dist',
        single: true,
    });
};

(async () => {
    await build();
})();
