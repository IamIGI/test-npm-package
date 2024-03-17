(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  add: () => add,
  sayHello: () => sayHello,
  testString: () => testString
});
module.exports = __toCommonJS(src_exports);

// src/functions.ts
function testString(text) {
  return text === "text";
}
function sayHello({ firstName, lastName, age }) {
  console.log("Hello");
  console.log(`Your firstname is: ${firstName}`);
  if (lastName)
    console.log(`Your lastname is: ${lastName}`);
  if (age)
    console.log(`Your age is: ${age}`);
}
function add(a, b) {
  return a + b;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  add,
  sayHello,
  testString
});

},{}],2:[function(require,module,exports){
const testPackage = require('test-npm-package-test-string');
// import testPackage from 'test-npm-package-test-string';

console.log(testPackage.sayHello({ firstName: 'igor', lastName: 'klusek' }));
console.log(testPackage.testString('text'));
console.log(testPackage.add(2, 4));

},{"test-npm-package-test-string":1}]},{},[2]);
