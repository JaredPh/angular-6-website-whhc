const fs = require('fs');
const filePath = './node_modules/moment/moment.js';
const patch = {
  find: 'var aliasedRequire = require;',
  replace: 'var aliasedRequire = function(){};'
};

var source = fs.readFileSync(filePath);
const index = source.indexOf(patch.find);
if (index === -1) {
  console.log('Moment already patched');
} else {
  source = source.toString().replace(patch.find, patch.replace);
  fs.writeFileSync(filePath, source, 'utf-8');
  console.log('Moment patched');
}
