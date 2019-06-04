"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _evalComponentCode = _interopRequireDefault(require("vue-docgen-api/dist/utils/evalComponentCode"));

var _getSourceInRequire = _interopRequireDefault(require("vue-docgen-api/dist/utils/getSourceInRequire"));

var _getMixin = _interopRequireDefault(require("vue-docgen-api/dist/utils/getMixin"));

var _getExtends = _interopRequireDefault(require("vue-docgen-api/dist/utils/getExtends"));

var _parseModule = _interopRequireDefault(require("./parseModule"));

module.exports = function getSandbox(stateDoc, file) {
  var parsedSource = (0, _parseModule.default)(stateDoc.jscodeRequest, file, stateDoc.jscodeLang);
  var sandbox = (0, _evalComponentCode.default)(parsedSource).exports;
  var component = sandbox.default;
  var listRequire = (0, _getSourceInRequire.default)(parsedSource, file);
  var mixins = (0, _getMixin.default)(listRequire).reverse();
  component.mixins = mixins;

  if (component.extends) {
    component.mixins = (0, _getExtends.default)(listRequire).reverse();
  }

  return sandbox;
};