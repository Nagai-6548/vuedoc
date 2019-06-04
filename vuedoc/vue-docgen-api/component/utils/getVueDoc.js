"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVueDoc;

var _path = _interopRequireDefault(require("path"));

var _variables = require("vue-docgen-api/dist/utils/variables");

var _processTags = _interopRequireDefault(require("vue-docgen-api/dist/utils/processTags"));

var _processProps = _interopRequireDefault(require("vue-docgen-api/dist/utils/processProps"));

var _processMethods = _interopRequireDefault(require("./processMethods"));

var _processEvents = _interopRequireDefault(require("vue-docgen-api/dist/utils/processEvents"));

var _processLifeCycles = _interopRequireDefault(require("./processLifeCycles"));

var _processComputed = _interopRequireDefault(require("./processComputed"));

var _processWatch = _interopRequireDefault(require("./processWatch"));

var _processData = _interopRequireDefault(require("./processData"));

function getVueDoc(stateDoc, component) {
  var docJsFile = stateDoc.getDocJs();

  var docComponent;
  var displayName = !component.name || component.name === '' ? // if component does not have a name, use the name of the file containing it
  _path.default.basename(stateDoc.file, _path.default.extname(stateDoc.file)) : component.name;

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

  var props = (0, _processProps.default)(docJsFile, component);
  var methods = (0, _processMethods.default)(docJsFile, component);
  var events = (0, _processEvents.default)(docJsFile, component);
  /** ライフサイクルメソッド、computed、watch、dataを追加 */
  var lifecycles = (0, _processLifeCycles.default)(docJsFile, component);
  var computed = (0, _processComputed.default)(docJsFile, component);
  var watch = (0, _processWatch.default)(docJsFile, component);
  var data = (0, _processData.default)(docJsFile, component);
  return {
    description: description,
    methods: methods,
    displayName: displayName,
    props: props,
    comment: comment,
    tags: tags,
    events: events,
    slots: stateDoc.slots,
    lifecycles: lifecycles,
    computed: computed,
    watch: watch,
    data: data,
  };
}