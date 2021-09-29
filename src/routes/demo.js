const express = require('express')
const pool = require('../helpers/pool')
const router = express.Router()

router.post('/testing', (req, res) => {
    const qry = 'insert into users set ?'
    const body = { ...req.body, role: 'user', is_active: true }
    pool.query(qry, body, (err, doc) => {
        if (err || !doc) {
            res.status(400).json({ message: 'something went wrong', err })
        } else {
            res.status(200).json({ message: 'added successfully', doc })
        }
    })
})

module.exports = router;