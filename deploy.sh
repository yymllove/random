rm *.js
rm *.html
rm manifest.json
rm *.ico
rm asset-manifest.json
rm -rf static/
npm run build
cp -R build/* .