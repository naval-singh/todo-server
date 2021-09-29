const express = require('express')
const { requireSignin, adminCheck } = require('../middleware')
const { addNewTodo } = require('../controller/todo.controller')
const router = express.Router()

router.post('/create', requireSignin, adminCheck, addNewTodo)

module.exports = router