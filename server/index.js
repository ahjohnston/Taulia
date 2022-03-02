var express = require('express')
var app = express()
var PORT = 4500

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
})