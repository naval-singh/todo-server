const { addNewTodoService } = require("../services/todo.service")


exports.addNewTodo = (req, res) => {
    addNewTodoService(req, res)
        .then(response => res.status(200).json({ response }))
        .catch(error => res.status(400).json({ error }))
}