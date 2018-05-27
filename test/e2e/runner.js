process.env.NODE_ENV = 'testing'

const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const webpackConfProd = require('../../build/webpack.config.prod')
const webpackConfDev = require('../../build/webpack.config.dev')

let server

const compiler = Webpack(webpackConfProd)
const devServerOpt = webpackConfDev.devServer
server = new WebpackDevServer(compiler, devServerOpt)

server.listen(devServerOpt.port, devServerOpt.host, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost:${devServerOpt.port}`);

  let argvs = process.argv.slice(2)
  if (argvs.indexOf('--config') === -1) {
    argvs = argvs.concat(['--config', 'test/e2e/nightwatch.conf.js'])
  }
  if (argvs.indexOf('--env') === -1) {
    argvs = argvs.concat(['--env', 'chrome'])
  }

  const spawn = require('cross-spawn')
  const runner = spawn('./node_modules/.bin/nightwatch', argvs, { stdio: 'inherit' })

  runner.on('exit', function (code) {
    server.close();
    process.exit(code);
  });

  runner.on('error', function (err) {
    server.close();
    throw err;
  });
})

