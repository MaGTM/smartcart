module.exports = function(api) {
  api?.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [[
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@': './src',
        }
      }
    ],]
  };
};
