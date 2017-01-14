#!/bin/bash

VERSION=`node -e "console.log(require('./package.json').version)"`

npm run build-demo
git checkout gh-pages
git rm -rf *
cp -r ./demo/* .
git add frost-core.css frost-core.js index.html prism-theme.js
git commit -m "[ci skip] Automated gh-pages commit of ${VERSION}"
git push origin gh-pages
git checkout master
