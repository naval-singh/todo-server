require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', require('./routes/demo'))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})