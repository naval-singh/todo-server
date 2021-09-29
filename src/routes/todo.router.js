const express = require('express')
const { requireSignin, adminCheck } = require('../middleware')
const { addNewTodo, getAllTodos, getTodoById, updateTodo, deleteTodo } = require('../controller/todo.controller')
const router = express.Router()

router.post('/create', requireSignin, adminCheck, addNewTodo)
router.get('/', requireSignin, getAllTodos)
router.get('/:id', requireSignin, getTodoById)
router.put('/:id', requireSignin, adminCheck, updateTodo)
router.delete('/:id', requireSignin, adminCheck, deleteTodo)

module.exports = router