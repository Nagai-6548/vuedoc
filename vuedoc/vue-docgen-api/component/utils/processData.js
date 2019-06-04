"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processData;

var _getData = _interopRequireDefault(require("./getData"));

function processData(docFile, component) {
  docFile = docFile.slice();
  var data = component.data;
  if (typeof data === "function") {
    data = data();
  }
  var mixins = component.mixins;
  var dataMixins = {};

  if (mixins) {
    mixins.forEach(function (mixin) {
      var dMixin = mixin.data;
      if (typeof dMixin === "function") {
        dMixin = dMixin();
      }

      if (dMixin) {
        if (Array.isArray(dMixin)) {
          var dataMerge = {};
          dMixin.forEach(function (key) {
            dataMerge[key] = {};
          });
          dataMixins = Object.assign({}, dataMerge, dataMixins);
        } else {
          dataMixins = Object.assign({}, dMixin, dataMixins);
        }
      }
    });
  }

  var hasDataInMixin = dataMixins && Object.keys(dataMixins).length;
  var hasDataInComponent = data && Object.keys(data).length;

  if (hasDataInMixin || hasDataInComponent) {
    var listDocData = {};

    if (Array.isArray(data)) {
      var newData = {};
      data.forEach(function (dataName) {
        newData[dataName] = {};
      });
      data = newData;
    }

    data = Object.assign({}, dataMixins, data);
    var listDocParts = [];
    Object.keys(data).forEach(function (key) {
      var dataName = key;
      var docPart = docFile.filter(function (comment) {
        var dataNameDoc = comment.longname;
        return dataNameDoc === dataName && listDocParts.indexOf(dataNameDoc) === -1;
      })[0];
      if (docPart) {
        listDocParts.push(docPart.longname);
      }
      var d = data[dataName];
      var docData = (0, _getData.default)(d, dataName, docPart);

      if (docData.tags.model) {
        dataName = 'v-model';
      }
      listDocData[dataName] = docData;
    });
    return listDocData;
  }

  return;
}