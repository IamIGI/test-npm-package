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
7. Publish package:
   1. npm adduser
   2. npm run build
   3. npm publish (last line returned is name of your package)
