const
  express = require('express'),
  rollup = require('express-middleware-rollup'),
  nodeResolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs'),
  buble = require('rollup-plugin-buble'),
  path = require('path')

const
  app = express(),
  templates = path.join(__dirname, 'templates')

app.use(rollup({
  mode: 'polyfill',
  src: 'words',
  rollupOpts: {
    plugins: [
      nodeResolve({ jsnext: true, main: true, browser: true }),
      commonjs(),
      buble()
    ]
  }
}))
app.use(express.static('words'))
app.get('*/', (req, res) => res.sendFile(`${ templates }/index.html`))
app.listen(3030)
