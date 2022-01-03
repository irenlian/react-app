#!/bin/sh
mkdir -p dist/ && \
rm -rf dist/* && \
cp src/index.html dist/ && \
cp src/manifest.webmanifest dist

if [[ $1 = "--verbose" ]]; then
    NODE_ENV=production node config/prod.js --verbose
else
    NODE_ENV=production node config/prod.js
fi