const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.put('/Home ', (req, res) => {
  res.send(' Wel Come to Home page.....')
})

app.get('/about ', (req, res) => {
  res.send(' THE the full information about this page ')
})

app.get('/technologies', (req, res) => {
  res.send('explore the technology')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
