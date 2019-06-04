"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getData;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _variables = require("vue-docgen-api/dist/utils/variables");

var _processTags = _interopRequireDefault(require("vue-docgen-api/dist/utils/processTags"));

var fnNameMatchRegex = /^\s*function\s+([^\(\s]*)\s*/;

function getTypeName(data) {
  if (!data) return _variables.UNDEFINED;

  if (Array.isArray(data)) {
    return data.map(getTypeNameToFunction).join('|');
  } else {
    return getTypeNameToFunction(data);
  }
}

function getTypeNameToFunction(object) {
  if (object.toLowerCase() === 'function') return 'func';
  return object.toLowerCase();
}

function getData(data, dataName, docPart) {
  var obj = {};
  if (Array.isArray(data)) {
    obj['type'] = {
      name: getTypeName(data)
    };
  } else if (typeof data === 'function') {
    obj['type'] = {
      name: getTypeName(data)
    };
  } else {
    obj['type'] = {
      name: getTypeName(docPart.type.names)
    };

    obj['defaultValue'] = {
      value: data,
      func: false
    }
  }
  obj['tags'] = (0, _processTags.default)(docPart, _variables.IGNORE_DEFAULT);
  obj['comment'] = (0, _variables.getComment)(docPart);
  obj['description'] = (0, _variables.getDescription)(docPart);
  return obj;
}