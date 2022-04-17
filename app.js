'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Handy Putra Pangiawan TI (52019012)\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
