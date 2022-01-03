#!/bin/sh
mkdir -p dist/ && \
rm -rf ./dist/* && \
cp src/index.html dist/ && \
cp src/manifest.webmanifest dist/ && \
NODE_ENV=development node config/dev.js