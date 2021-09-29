require('dotenv').config()
const cors = require('cors')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/auth.router'))
app.use('/api/todo', require('./routes/todo.router'))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})