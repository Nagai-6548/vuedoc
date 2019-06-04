"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processActions;

var _getMethod = _interopRequireDefault(require("vue-docgen-api/dist/utils/getMethod"));

function processActions(docFile, store) {
  docFile = docFile.slice();
  var listActions = [];
  var actions = store.actions || {};

  if (actions) {
    var listDocParts = [];
    Object.keys(actions).forEach(function (methodName) {
      var docPart = docFile.filter(function (comment) {
        return comment.longname.indexOf("actions." + methodName) > -1;
      })[0];

      var innerFunctions = [];
      var docParts = docFile.filter(function (comment) {
        return comment.longname.indexOf("actions." + methodName + "~") > -1;
      });
      docParts.forEach(docPart => {
        innerFunctions.push((0, _getMethod.default)(docPart.longname.split("~")[1], docPart));
      });

      if (docPart) {
        listDocParts.push(docPart.longname);
        var action = (0, _getMethod.default)(methodName, docPart);
        action.innerFunctions = innerFunctions;
        listActions.push(action);
      } else {
        console.log("No Comment ", store.displayName + ".actions." + methodName);
      }
    });
  }

  return listActions;
}