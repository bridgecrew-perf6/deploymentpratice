const express = require('express');
const cors = require('cors')

const path = require('path');


const app = express()
app.use(cors())
app.use(express.json())


//Middleware connecting static links
app.use(express.static(path.join(__dirname, '../client')))
app.use(app.use(express.static(path.join(__dirname, '../client/style.css')))









const port = process.env.PORT || 4040

app.listen(port, () => {
    console.log(`we on port ${port}`)
})
