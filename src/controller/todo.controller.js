const { addNewTodoService, getAllTodoService, getTodoByIdService, updateTodoService, deleteTodoService } = require("../services/todo.service")

exports.addNewTodo = (req, res) => {
    addNewTodoService(req, res)
        .then(response => res.status(200).json({ response }))
        .catch(error => res.status(400).json({ error }))
}

exports.getAllTodos = (req, res) => {
    getAllTodoService(req, res)
        .then(response => res.status(200).json({ response }))
        .catch(error => res.status(400).json({ error }))
}

exports.getTodoById = (req, res) => {
    getTodoByIdService(req, res)
        .then(response => res.status(200).json({ response }))
        .catch(error => res.status(400).json({ error }))
}

exports.updateTodo = (req, res) => {
    updateTodoService(req, res)
        .then(response => res.status(200).json({ response }))
        .catch(error => res.status(400).json({ error }))
}

exports.deleteTodo = (req, res) => {
    deleteTodoService(req, res)
        .then(response => res.status(200).json({ response }))
        .catch(error => res.status(400).json({ error }))
}