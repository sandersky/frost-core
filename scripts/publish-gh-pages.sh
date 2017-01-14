#!/bin/bash

VERSION=`node -e "console.log(require('./package.json').version)"`

npm run build-demo
git checkout gh-pages
git rm -rf *
rm ./.gitignore ./*.css ./*.js ./*.html ./*.md
cp -r ./demo/* .
git add ./*.css ./*.js ./*.html
git commit -m "[ci skip] Automated gh-pages commit of ${VERSION}"
git push origin gh-pages
git checkout master
