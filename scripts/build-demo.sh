# Make sure we have the latest source built
npm run build

# Copy over compiled Javascript and CSS
cp dist/frost-core* demo/

# Copy over Prism them for styling code examples
cp node_modules/prismjs/themes/prism-tomorrow.css demo/prism-theme.css
