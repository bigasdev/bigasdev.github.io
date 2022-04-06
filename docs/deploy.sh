#!/usr/bin/env sh
# Make sure that the script throws the errors encountered
set -e
# Generating static files
npm run docs:build
# Go to the generated folder
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
# If released to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Bigasdev/test.git master:gh-pages
git push -f git@gitee.com:Bigasdev/test.git master:gh-pages
cd -