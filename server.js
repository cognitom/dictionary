'use strict'
const
  express = require('express'),
  path = require('path'),
  felt = require('felt'),
  recipe = require('felt-recipe-minimal')

const
  app = express(),
  templates = path.join(__dirname, 'templates')

app.use(felt(recipe, {
  src: 'words',
  patterns: ['*/index.js', '**/*.css'],
  watch: true,
  debug: true
}))
app.use(express.static('words'))
app.get('*/', (req, res) => res.sendFile(`${ templates }/index.html`))
app.listen(3030)
