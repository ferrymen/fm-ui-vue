// load the default config generator.
// const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
// module.exports = (baseConfig, env) => {
//     const config = genDefaultConfig(baseConfig, env);
//     // Extend it as you need.
//     // For example, add typescript loader:
//     config.module.rules.push({
//         test: /\.(ts|tsx)$/,
//         loader: require.resolve('ts-loader')
//     });
//     config.resolve.extensions.push('.ts', '.tsx');
//     return config;
// };

// const merge = require('webpack-merge')
// // const { VueLoaderPlugin } = require('vue-loader')

// const genStorybookDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js')

// const vueConfig = require('../build/webpack.config.dev')
// delete vueConfig.mode

// module.exports = (storybookBaseConfig, configType) => {
//   const storybookConfig = genStorybookDefaultConfig(
//     storybookBaseConfig,
//     configType
//   );
//   // storybookConfig.plugins = storybookConfig.plugins.concat(vueConfig.plugins, new VueLoaderPlugin())
//   const config = {
//     ...vueConfig,
//     // entry: './dev/main.tsx', // overwite entry
//     output: {
//       publicPath: '/'
//     }, // overwrite output
//     // remove duplicated plugins
//     plugins: merge({
//       customizeArray: merge.unique(
//         'plugins',
//         [
//           'HotModuleReplacementPlugin',
//           'CaseSensitivePathsPlugin',
//           'WatchMissingNodeModulesPlugin'
//         ],
//         plugin => plugin.constructor && plugin.constructor.name
//       )
//     })(vueConfig, storybookConfig).plugins,
//     resolve: {
//       // <--------- This bit here
//       ...vueConfig.resolve,
//       alias: {
//         ...vueConfig.resolve.alias,
//         vue$: storybookConfig.resolve.alias.vue$
//       }
//     }
//   }
//   console.log(config)
//   return config
// }

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  // defaultConfig.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   include: path.resolve(__dirname, '../src'),
  //   loader: require.resolve('ts-loader')
  // });
  // defaultConfig.module.rules.push({
  //   test: /\.css$/,
  //   include: path.resolve(__dirname, '../src'),
  //   loader: require.resolve('css-loader')
  // });
  // defaultConfig.resolve.extensions.push('.ts', '.tsx');

  // defaultConfig.plugins.push(new VueLoaderPlugin())

  // console.log(defaultConfig.module.rules)
  defaultConfig = Object.assign({}, defaultConfig, {
    resolve: {
      extensions: [...defaultConfig.resolve.extensions, '.ts', '.tsx'],
      alias: {
        ...defaultConfig.resolve.alias,
        '@ferrymen/fm-ui-vue': path.resolve(__dirname, '../src')
      }
    },
    module: {
      rules: [
        ...defaultConfig.module.rules,
        {
          test: /\.(ts|tsx)$/,
          include: path.resolve(__dirname, '../src'),
          // Module build failed: TypeError: Cannot read property 'afterCompile' of undefined
          loader: require.resolve('ts-loader')
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, '../src'),
          loader: require.resolve('css-loader')
        },
        // {
        //   test: /\.scss$/,
        //   // loader: 'style-loader!css-loader!sass-loader'
        //   use: [
        //     {
        //       loader: 'style-loader'
        //     },
        //     {
        //       loader: 'typings-for-css-modules-loader',
        //       options: {
        //         modules: true,
        //         namedExport: true,
        //         camelCase: true,
        //         minimize: true,
        //         localIdentName: "[local]_[hash:base64:5]"
        //       }
        //     },
        //     {
        //       loader: 'sass-loader'
        //     }
        //   ]
        // }
      ]
    },
    plugins: [
      ...defaultConfig.plugins,
      new VueLoaderPlugin()
    ]
  })

  // console.log(defaultConfig)

  return defaultConfig;
};