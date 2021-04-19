import path from 'path'
import fs from 'fs'

import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'

import App from '../src/Components/App'

const PORT = process.env.PORT || 3006
const app = express()

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />)

  const indexFile = path.resolve('./dist/index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('F in chat, there was an error:', err)
      return res.status(500).send('F in chat')
    }

    return res.send(
      data.replace('<div id="root" style="font-size: 16px;"></div>', `<div id="root" style="font-size: 16px;">${app}</div>`),
    )
  })
})

app.use(express.static('./dist'))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
