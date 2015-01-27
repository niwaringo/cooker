!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.tongs=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Tongs = require('tongs');

module.exports = new Tongs();

},{"tongs":2}],2:[function(require,module,exports){
'use strict';

function Tongs(cookies) {}

Tongs.prototype.cookie = function(name, value, option) {
  if (!value) return this.read(name);

  this.save(name, value, option);
};

Tongs.prototype.save = function(name, value, option) {
  document.cookie = [name, '=', value].join('');
};

Tongs.prototype.read = function(name) {
  var cookie_stores = document.cookie.split('; ');
  var cookies = [];

  for (var i = 0, l = cookie_stores.length; i < l; i++) {
    cookies = cookie_stores[i].split(/=(.+)/);
    if (cookies[0] === name) return cookies[1];
  }
};

Tongs.prototype.remove = function(name) {
  document.cookie = cookieStringfy(name, '', {expires: -1});
};

module.exports = Tongs;

function cookieStringfy(name, value, opt) {
  return ([
  name, '=', value,
    opt.expires? '; expires=' + expiresString(opt.expires): ''
  ].join(''));
}

function expiresString(date) {
  if (Object.prototype.toString.call(date) === '[object Number]') {
    return new Date(+new Date() + (date * 864e+5)).toUTCString();
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    return date.toUTCString();
  }
  return '';
}

// var Model = require('tongs.model');
// var Collection = require('tongs.collection');
//
// var Tongs = function() {
//   this.updateCollection();
// };
//
// /**
//  * @param {string} name
//  * @param {string} [value]
//  */
// Tongs.prototype.cookie = function(name, value, option) {
//   if (value) {
//     this.set(name, value, option);
//     return;
//   }
//
//   return this.get(name);
// };
//
// /**
//  * @param {string} name
//  * @return {string}
//  */
// Tongs.prototype.get = function(name) {
//   this.updateCollection();
//   if (this._collection._models.length === 0 || !this._collection.get(name)) return '';
//   return decodeURIComponent(this._collection.get(name).value());
// };
//
// /**
//  *  @param {string} name
//  *  @param {string} value
//  *  @return {void}
//  */
// Tongs.prototype.set = function(name, value, option) {
//   new Model(name, value, option).save();
// };
//
// /**
//  * create is not overwrite
//  * @param {string} name
//  * @param {string} value
//  */
// Tongs.prototype.create = function(name, value) {
//   if (this.get(name)) return false;
//   this.set(name, value);
//   return !!this.get(name);
// };
//
// /**
//  * update is only overwrite
//  * @param {string} name
//  * @param {string} value
//  */
// Tongs.prototype.update = function(name, value) {
//   if (!this.get(name)) return false;
//   this.set(name, value);
//
//   return this.get(name) === value;
// };
//
// /**
//  * @return {array<object>}
//  */
// Tongs.prototype.toJSON = function() {
//   this.updateCollection();
//   return this._collection.toJSON();
// };
//
// /**
//  * @param {function} callback
//  */
// Tongs.prototype.each = function(callback, thisArg) {
//   this.updateCollection();
//   this._collection.each(callback, thisArg);
// };
//
// /**
//  * @param {string} name
//  * @return {boolean}
//  */
// Tongs.prototype.remove = function(name, option) {
//   if (!this.get(name)) return false;
//
//   this.each(function(model) {
//     if (model.name() === name) {
//       model.remove(option);
//     }
//   });
//
//   return !this.get(name);
// };
//
// // removeAll is test only
// Tongs.prototype.removeAll = function() {
//   this.updateCollection();
//   this._collection.removeAll();
// };
//
// Tongs.prototype.updateCollection = function() {
//   if (document) {
//     this._collection = new Collection(document.cookie);
//   }
// };
//
// module.exports = Tongs;
//
// var instance;
// global.tongs = function() {
//   if (instance) return instance;
//
//   instance = new Tongs();
//   return instance;
// };

},{}]},{},[1])(1)
});