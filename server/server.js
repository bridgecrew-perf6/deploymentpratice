const express = require('express');
const { append } = require('express/lib/response')
const cors = require('cors')

const path = require('path');
const { dirname } = require('path');

const app = express()
app.use(cors())
app.use(express.json())


//Middleware connecting static links
app.use(express.static(path.join(__dirname, '../client')))











app.listen(port, () => {
    console.log(`we on port ${port}`)
})
