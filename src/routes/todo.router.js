const express = require('express')
const { requireSignin, adminCheck } = require('../middleware')
const { addNewTodo, getAllTodos } = require('../controller/todo.controller')
const router = express.Router()

router.post('/create', requireSignin, adminCheck, addNewTodo)
router.get('/get-all', requireSignin, getAllTodos)

module.exports = router