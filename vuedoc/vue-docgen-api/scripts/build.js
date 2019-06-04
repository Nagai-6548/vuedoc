
const glob = require('glob');
const fs = require('fs');
const config = require("../../vuedoc-config.json");
const vueDocs = require('../component/main.js');
const vuexDocs = require('../vuex/main.js');
const result = {
  components: {},
  store: {}
};
glob(config.componentsPath, (err, files) => {
  files.forEach(filePath => {
    var componentInfo = vueDocs.parse(filePath);
    result.components[componentInfo.displayName] = componentInfo;
  });
  glob(config.storePath, {
    ignore: config.storeIgnorePath
  }, (err, files) => {
    files.forEach(filePath => {
      var storeInfo = vuexDocs.parse(filePath);
      result.store[storeInfo.displayName] = storeInfo;
    });
    fs.writeFileSync( "vue-docgen-api/dist/output.json" , JSON.stringify(result, null, 2) );
  });
});