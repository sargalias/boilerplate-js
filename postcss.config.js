const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cssDeclarationSorter = require('css-declaration-sorter');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano,
    cssDeclarationSorter,
  ],
};
