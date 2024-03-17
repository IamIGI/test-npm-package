const testPackage = require('test-npm-package-test-string');

console.log(testPackage.sayHello({ firstName: 'igor', lastName: 'klusek' }));
console.log(testPackage.testString('text'));
