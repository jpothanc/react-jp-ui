@echo off
npm version patch
npm run build
npm publish --access public
exit
