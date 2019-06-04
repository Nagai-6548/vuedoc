"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processComputed;

var _getMethod = _interopRequireDefault(require("vue-docgen-api/dist/utils/getMethod"));

function processComputed(docFile, component) {
  docFile = docFile.slice();
  var listComputed = [];
  var computed = component.computed || {};

  if (computed) {
    var listDocParts = [];
    Object.keys(computed).forEach(function (methodName) {
      var docPart = docFile.reverse().filter(function (comment) {
        return comment.longname.indexOf("computed." + methodName) > -1 && listDocParts.indexOf(comment.longname) === -1;
      })[0];

      if (docPart) {
        listDocParts.push(docPart.longname);
        listComputed.push((0, _getMethod.default)(methodName, docPart));
      } else {
        console.log("No Comment ", component.name + "." + methodName);
      }
    });
  }

  return listComputed;
}