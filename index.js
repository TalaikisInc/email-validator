const { tlsEmail } = require('./config')
const verifier = require('email-verify')
const express = require('express')
const app = express()

app.get('/:email', (req, res) => {
  const email = req.params.email
  verifier.verify(email, (err, info) => {
    if (err) {
      res.json({ error: err.message })
    } else {
      res.json({ status: info.success })
    }
  })
})

require('greenlock-express')
  .init({
    packageRoot: __dirname,
    configDir: './greenlock.d',
    maintainerEmail: tlsEmail,
    cluster: false
  }).serve(app)
