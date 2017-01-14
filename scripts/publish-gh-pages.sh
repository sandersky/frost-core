#!/bin/bash

VERSION=`node -e "console.log(require('./package.json').version)"`
TMP_GH_PAGES_DIR=.gh-pages-demo

npm run build-demo
rm -rf ${TMP_GH_PAGES_DIR}
mkdir ${TMP_GH_PAGES_DIR}
cd ${TMP_GH_PAGES_DIR}
git checkout gh-pages
git rm -rf *
cp -r ../demo/* .
git add --all
git commit -m "[ci skip] Automated gh-pages commit of ${VERSION}"
git push origin gh-pages > /dev/null 2>&1
