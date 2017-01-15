# Make sure we have the latest source built
npm run build

./node_modules/.bin/cleancss -o ./dist/frost-core.min.css --s0 ./dist/frost-core.css
./node_modules/.bin/uglifyjs -c --screw-ie8 -o ./dist/frost-core.min.js -- ./dist/frost-core.js
