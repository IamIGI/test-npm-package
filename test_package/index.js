const testPackage = require('test-npm-package-test-string');
// import testPackage from 'test-npm-package-test-string';

console.log(testPackage.sayHello({ firstName: 'igor', lastName: 'klusek' }));
console.log(testPackage.testString('text'));
console.log(testPackage.add(2, 4));

document.addEventListener('DOMContentLoaded', () => {
  const modalButton = document.querySelector('.modal-button');
  modalButton.addEventListener('click', () => {
    // Call the triggerModal function with the specified title and description
    testPackage.triggerModal('elo', 'description text');
  });
});
