"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getComponentModuleJSCode", {
  enumerable: true,
  get: function get() {
    return _getComponentModuleJSCode.default;
  }
});
Object.defineProperty(exports, "getDocFile", {
  enumerable: true,
  get: function get() {
    return _getDocFile.default;
  }
});
Object.defineProperty(exports, "getVuexDoc", {
  enumerable: true,
  get: function get() {
    return _getVuexDoc.default;
  }
});
Object.defineProperty(exports, "getSandbox", {
  enumerable: true,
  get: function get() {
    return _getSandbox.default;
  }
});
Object.defineProperty(exports, "parser", {
  enumerable: true,
  get: function get() {
    return _parser.default;
  }
});

var _getComponentModuleJSCode = _interopRequireDefault(require("vue-docgen-api/dist/utils/getComponentModuleJSCode"));

var _getDocFile = _interopRequireDefault(require("vue-docgen-api/dist/utils/getDocFile"));

var _getVuexDoc = _interopRequireDefault(require("./getVuexDoc"));

var _getSandbox = _interopRequireDefault(require("./getSandbox"));

var _parser = _interopRequireDefault(require("vue-docgen-api/dist/utils/parser"));