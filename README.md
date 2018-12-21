# Sample front end JavaScript project configuration

## Configuration

- Webpack
- Babel
- Sourcemaps (devtool from webpack)
- JS minification (comes with webpack)
- Scss (sass-loader)
- Development server (devServer from webpack)
- Dist directory refresh plugin (CleanWebpackPlugin)
- Auto-generated index.html file (HtmlWebpackPlugin)
- Code-splitting (webpack configuration)
- Suitable production options (separate from development options)
  - CSS extraction into a separate file
- ESLint for JS
- PostCSS with
  - CSSNano for minification
  - Autoprefixer
CSS linting with stylelint-webpack-plugin and the standard configuration.

## Modify the configuration

It's recommended that you go through the configuration in this boilerplate and modify it with what you need for your own project.

For each option, it's recommended that you check the relevant documentation and then make your changes.

For example, ESLint will probably need modification to something that's suitable for you and your project.
