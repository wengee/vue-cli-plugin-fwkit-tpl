/* eslint-disable quote-props */
const fs = require('fs');
const path = require('path');

function rmdir(dir) {
  const list = fs.readdirSync(dir);
  for (let i = 0; i < list.length; i += 1) {
    const filename = path.join(dir, list[i]);
    const stat = fs.statSync(filename);

    if (filename === '.' || filename === '..') {
      //
    } else if (stat.isDirectory()) {
      rmdir(filename);
    } else {
      fs.unlinkSync(filename);
    }
  }

  fs.rmdirSync(dir);
}

module.exports = (api) => {
  rmdir(api.resolve('src'));
  api.render('./templates/default');

  api.extendPackage({
    eslintConfig: undefined,
    browserslist: undefined,
    dependencies: {
      'axios': '^0.19.0',
      'vue-axios': '^2.1.4',
      'vue-router': '^3.0.3',
      'vuex': '^3.0.1',
      'webpack': '^4.39.3',
    },
    devDependencies: {
      '@vue/eslint-config-airbnb': '^4.0.0',
      'html-webpack-plugin': '^3.2.0',
      'less': '^3.10.3',
      'less-loader': '^5.0.0',
      'pug': '^2.0.4',
      'pug-plain-loader': '^1.0.0',
      'vue-cli-plugin-externals': '^2.0.2',
      'vue-template-compiler': '^2.6.10',
      'webpack-provide-global-plugin': '^0.0.1',
      'webpack-upload': 'github:wengee/webpack-upload',
    },
  });
};
