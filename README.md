# Sample front end JavaScript project configuration

## Configuration

- Webpack.
- Babel.
- Sourcemaps (devtool from webpack).
- JS minification (comes with webpack).
- Scss (sass-loader).
- Development server (devServer from webpack).
- Deletes the dist directory before every new build (CleanWebpackPlugin)..
- Auto-generated index.html file (HtmlWebpackPlugin).
- Code-splitting (webpack configuration).
  - No duplication in chunks (optimization: splitChunks option for webpack).
  - node_module imports separated out in their own vendor file.
- Caching: Filenames include the contenthash.
- Enabled preloading for js code (PreloadWebpackPlugin).
- CSS extraction into a separate file (mini-css-extract-plugin).
- ESLint for JS.
    Emits errors so it does not crash builds.
- PostCSS with
  - CSSNano for minification
  - Autoprefixer
  - CSS declaration sorting for smaller file size after gZip with css-declaration-sorter
- CSS linting with stylelint-webpack-plugin and the standard configuration.
- CSS declaration sorting for smaller file size after gZip with the PostCSS css-declaration-sorter plugin.
- Separate webpack configuration files for production, development and common.
- Jest for unit testing.
- Prettier code formatter
  - package.json command "format" to format all the code in the "src" directory.
  - Build fails on ESLint errors.


## Modify the configuration

It's recommended that you go through the configuration in this boilerplate and modify it with what you need for your own project.

For each option, it's recommended that you check the relevant documentation and then make your changes.

Some example options you might want to change:
  - ESLint will probably need modification to something that's suitable for you and your project.
  - The code splitting options may not be right for your project. For example you may not want to split all the vendor packages in their own file, as that file can be very large.
  - You might want to process CSS and JS files separately (see the mini-css-extract-plugin for details).
  - You might want to add path aliases for your project.
  - Etc.


## Notes

**Please note that the sourcemaps for CSS with the devServer produce a bad FOUC effect. This is apparently a bug in the relevant packages. This does not happen with the production build.**
