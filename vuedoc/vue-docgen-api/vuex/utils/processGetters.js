"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processGetters;

var _getMethod = _interopRequireDefault(require("vue-docgen-api/dist/utils/getMethod"));

function processGetters(docFile, store) {
  docFile = docFile.slice();
  var listGetters = [];
  var getters = store.getters || {};

  if (getters) {
    var listDocParts = [];
    Object.keys(getters).forEach(function (methodName) {
      var docPart = docFile.filter(function (comment) {
        return comment.longname.indexOf("getters." + methodName) > -1;
      })[0];

      var innerFunctions = [];
      var docParts = docFile.filter(function (comment) {
        return comment.longname.indexOf("getters." + methodName + "~") > -1;
      });
      docParts.forEach(docPart => {
        innerFunctions.push((0, _getMethod.default)(docPart.longname.split("~")[1], docPart));
      });

      if (docPart) {
        listDocParts.push(docPart.longname);
        var getter = (0, _getMethod.default)(methodName, docPart);
        getter.innerFunctions = innerFunctions;
        listGetters.push(getter);
      } else {
        console.log("No Comment ", store.displayName + ".getters." + methodName);
      }
    });
  }

  return listGetters;
}