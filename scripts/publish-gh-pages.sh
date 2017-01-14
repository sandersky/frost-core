#!/bin/bash

VERSION=`node -e "console.log(require('./package.json').version)"`

npm run build-demo
cp -r ./demo/ ./tmp
git checkout gh-pages
git rm -rf *
cp -r ./tmp/* .
git add frost-core.css frost-core.js index.html prism-theme.css
git commit -m "[ci skip] Automated gh-pages commit of ${VERSION}"
git push origin gh-pages
git checkout master
