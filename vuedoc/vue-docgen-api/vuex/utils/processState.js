"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processState;

var _getMethod = _interopRequireDefault(require("vue-docgen-api/dist/utils/getMethod"));

function processState(docFile, store) {
  docFile = docFile.slice();
  var listState = [];
  var state = store.state || {};

  if (state) {
    var listDocParts = [];
    Object.keys(state).forEach(function (methodName) {
      var docPart = docFile.reverse().filter(function (comment) {
        return comment.longname.indexOf("state." + methodName) > -1;
      })[0];

      if (docPart) {
        listDocParts.push(docPart.longname);
        listState.push((0, _getMethod.default)(methodName, docPart));
      } else {
        console.log("No Comment ", store.displayName + ".state." + methodName);
      }
    });
  }

  return listState;
}