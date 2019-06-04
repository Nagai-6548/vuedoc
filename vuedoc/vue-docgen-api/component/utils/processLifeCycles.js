"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processLifeCycles;

var _getMethod = _interopRequireDefault(require("vue-docgen-api/dist/utils/getMethod"));

function processLifeCycles(docFile, component) {
  docFile = docFile.slice();
  var listDocLifeCycles = [];
  const lifecycles = {};
  const lifecycleNames = [
    "beforeCreate",
    "created",
    "beforeMount",
    "mounted",
    "beforeUpdate",
    "updated",
    "activated",
    "deactivated",
    "beforeDestroy",
    "destroyed"
  ];
  lifecycleNames.forEach(lifecycleName => {
    const method = component[lifecycleName];
    if (method) {
      lifecycles[lifecycleName] = method;
    }
  })

  if (lifecycles) {
    var listDocParts = [];
    Object.keys(lifecycles).forEach(function (methodName) {
      var docPart = docFile.reverse().filter(function (comment) {
        return comment.longname.indexOf(methodName) > -1 && listDocParts.indexOf(comment.longname) === -1;
      })[0];

      if (docPart) {
        listDocParts.push(docPart.longname);
        listDocLifeCycles.push((0, _getMethod.default)(methodName, docPart));
      } else {
        console.log("No Comment ", component.name + "." + methodName);
      }
    });
  }

  return listDocLifeCycles;
}