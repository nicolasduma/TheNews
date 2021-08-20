const express = require('express')
const app = express()
const path = require('path')

// >>> Start Functions <<<

function startServer() {
  app.listen(process.env.PORT, () => {
    console.log(`>>> Server running on port ${process.env.PORT} <<<`)
  })
}

function startSendFile(directory) {
  directory = path.join(__dirname, `/../${directory}`)

  app.use(express.static(directory))

  app.get('*', (req, res) => {
    res.sendFile(`${directory}/index.html`, error => {
      if (error) res.status(500).send(error)
    })
  })
}

if (process.env.STATE !== 'development') startSendFile('client/build')

module.exports = { startServer }
