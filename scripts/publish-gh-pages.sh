#!/bin/bash

VERSION=`node -e "console.log(require('./package.json').version)"`
TMP_GH_PAGES_DIR=.gh-pages-demo

npm run build-demo
git checkout gh-pages
git rm -rf *
rm .gitignore *.css *.js *.html *.md
cp -r ../demo/* .
rm -rf demo scripts src tests
git add --all
git commit -m "[ci skip] Automated gh-pages commit of ${VERSION}"
git push origin gh-pages
