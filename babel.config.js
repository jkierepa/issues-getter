module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@store': './src/store',
            '@theme': './src/theme',
            '@appTypes': './src/appTypes',
            '@utils': './src/utils',
            '@screens': './src/screens',
            '@containers': './src/containers'
          }
        }
      ],
      ['module:react-native-dotenv', {
        moduleName: 'react-native-dotenv'
      }]
    ]
  }
}
