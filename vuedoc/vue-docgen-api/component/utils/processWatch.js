"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processWatch;

var _getMethod = _interopRequireDefault(require("vue-docgen-api/dist/utils/getMethod"));

function processWatch(docFile, component) {
  docFile = docFile.slice();
  var listWatch = [];
  var watch = component.watch || {};

  if (watch) {
    var listDocParts = [];
    Object.keys(watch).forEach(function (methodName) {
      var docPart = docFile.reverse().filter(function (comment) {
        return comment.longname.indexOf("watch." + methodName) > -1 && listDocParts.indexOf(comment.longname) === -1;
      })[0];

      if (docPart) {
        listDocParts.push(docPart.longname);
        listWatch.push((0, _getMethod.default)(methodName, docPart));
      } else {
        console.log("No Comment ", component.name + "." + methodName);
      }
    });
  }

  return listWatch;
}