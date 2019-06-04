"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVuexDoc;

var _path = _interopRequireDefault(require("path"));

var _variables = require("vue-docgen-api/dist/utils/variables");

var _processTags = _interopRequireDefault(require("vue-docgen-api/dist/utils/processTags"));

var _processState = _interopRequireDefault(require("./processState"));

var _processGetters = _interopRequireDefault(require("./processGetters"));

var _processMutations = _interopRequireDefault(require("./processMutations"));

var _processActions = _interopRequireDefault(require("./processActions"));

function getVuexDoc(stateDoc, store) {
  var docJsFile = stateDoc.getDocJs();
  var docComponent;
  var displayName = _path.default.basename(stateDoc.file, _path.default.extname(stateDoc.file));
  store.displayName = displayName;

  if (docJsFile) {
    docJsFile = docJsFile.filter(function (comment) {
      return comment.kind !== 'package';
    });
    docComponent = docJsFile.filter(function (comment) {
      return comment.longname === 'module.exports' || comment.longname === 'default' || comment.longname === '_default';
    })[0];
  } else {
    docJsFile = [];
    docComponent = false;
  }

  var description = _variables.EMPTY;
  var comment = _variables.EMPTY;
  var tags = {};

  if (docComponent) {
    description = (0, _variables.getDescription)(docComponent);
    comment = (0, _variables.getComment)(docComponent);
    tags = (0, _processTags.default)(docComponent, _variables.IGNORE_DEFAULT);
  }

  /** Vuexのstate、getters、mutations、actionsを追加 */
  var state = (0, _processState.default)(docJsFile, store);
  var getters = (0, _processGetters.default)(docJsFile, store);
  var mutations = (0, _processMutations.default)(docJsFile, store);
  var actions = (0, _processActions.default)(docJsFile, store);
  return {
    description: description,
    tags: tags,
    comment: comment,
    displayName: displayName,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
  };
}