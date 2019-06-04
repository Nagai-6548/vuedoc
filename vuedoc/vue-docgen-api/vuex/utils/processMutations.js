"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processMutations;

var _getMethod = _interopRequireDefault(require("vue-docgen-api/dist/utils/getMethod"));

function processMutations(docFile, store) {
  docFile = docFile.slice();
  var listMutations = [];
  var mutations = store.mutations || {};

  if (mutations) {
    var listDocParts = [];
    Object.keys(mutations).forEach(function (methodName) {
      var docPart = docFile.filter(function (comment) {
        return comment.longname.indexOf("mutations." + methodName) > -1;
      })[0];

      var innerFunctions = [];
      var docParts = docFile.filter(function (comment) {
        return comment.longname.indexOf("mutations." + methodName + "~") > -1;
      });
      docParts.forEach(docPart => {
        innerFunctions.push((0, _getMethod.default)(docPart.longname.split("~")[1], docPart));
      });

      if (docPart) {
        listDocParts.push(docPart.longname);
        var mutation = (0, _getMethod.default)(methodName, docPart);
        mutation.innerFunctions = innerFunctions;
        listMutations.push(mutation);
      } else {
        console.log("No Comment ", store.displayName + ".mutations." + methodName);
      }
    });
  }

  return listMutations;
}