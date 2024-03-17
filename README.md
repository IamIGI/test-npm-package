# TEST npm package

A list of test functions

# Instruction based on YT video:

https://www.youtube.com/watch?v=xnfdm-s8adI

# Instruction, to deploy npm

1. npm init
2. Edit package.json data
3. install required packages
4. build your package
5. npm run build
6. Test your package:
   1. npm pack (publishing package locally)
   2. you created tgz file,
   3. npm install < path_to_package_where_it_was_created >
   4. run code in cli: node < file_name >.js
   5. run in index.html
      1. npm install -g browserify
      2. browserify index.js -o bundle.js (this will create fill with all required packages)
      3. import created file: <script src="bundle.js"></script>
7. Publish package:
   1. npm adduser
   2. npm run build
   3. Push changes to git repository
   4. npm publish (ast line returned is name of your package)
8. Update packages
   1. npm adduser
   2. npm run build
   3. Push changes to git repository
   4. Update version
      1. npm version patch (Increment the patch version 1.0.0 -> 1.0.1)
      2. npm version minor (1.0.0 -> 1.1.0)
      3. npm version major (1.0.0 -> 2.0.0)
   5. npm publish (ast line returned is name of your package)
