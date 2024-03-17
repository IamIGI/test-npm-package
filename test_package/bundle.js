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
  testString: () => testString,
  triggerModal: () => triggerModal
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

// src/showModal.ts
var Modal = class {
  constructor() {
    this.overlayElement = document.createElement("div");
    this.overlayElement.classList.add("overlay");
    document.body.appendChild(this.overlayElement);
    this.overlayElement.style.position = "fixed";
    this.overlayElement.style.top = "0";
    this.overlayElement.style.left = "0";
    this.overlayElement.style.width = "100%";
    this.overlayElement.style.height = "100%";
    this.overlayElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    this.modalElement = document.createElement("div");
    this.modalElement.classList.add("modal");
    document.body.appendChild(this.modalElement);
    this.modalElement.style.position = "fixed";
    this.modalElement.style.top = "50%";
    this.modalElement.style.left = "50%";
    this.modalElement.style.transform = "translate(-50%, -50%)";
    this.modalElement.style.backgroundColor = "#fff";
    this.modalElement.style.padding = "20px";
    this.modalElement.style.borderRadius = "5px";
    this.titleElement = document.createElement("h2");
    this.titleElement.classList.add("modal-title");
    this.modalElement.appendChild(this.titleElement);
    this.descriptionElement = document.createElement("p");
    this.descriptionElement.classList.add("modal-description");
    this.modalElement.appendChild(this.descriptionElement);
    this.closeButton = document.createElement("button");
    this.closeButton.textContent = "X";
    this.closeButton.classList.add("modal-close-button");
    this.modalElement.appendChild(this.closeButton);
    this.closeButton.addEventListener("click", () => {
      this.hideModal();
    });
  }
  // Method to show the modal with provided title and description
  showModal(title, description) {
    this.titleElement.textContent = title;
    this.descriptionElement.textContent = description;
    this.overlayElement.style.display = "block";
    this.modalElement.style.display = "block";
  }
  // Method to hide the modal
  hideModal() {
    this.overlayElement.style.display = "none";
    this.modalElement.style.display = "none";
  }
};
function triggerModal(title, description) {
  const modal = new Modal();
  modal.showModal(title, description);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  add,
  sayHello,
  testString,
  triggerModal
});

},{}],2:[function(require,module,exports){
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

},{"test-npm-package-test-string":1}]},{},[2]);
