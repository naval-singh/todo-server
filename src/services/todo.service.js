const shortid = require('shortid')
const pool = require('../helpers/pool')

exports.addNewTodoService = (req, res) => {
    return new Promise((resolve, reject) => {
        const body = {
            id: shortid.generate(),
            title: req.body.title,
            user_id: req.user.id,
            is_completed: false,
            created_at: new Date()
        }
        const insertQuery = 'insert into todo_list set ?'
        pool.query(insertQuery, body, (error, response) => {
            if (error) { reject({ message: 'something went wrong', error }) }
            else { resolve({ response }) }
        })
    })
}

exports.getAllTodoService = (req, res) => {
    return new Promise((resolve, reject) => {
        const selectQuery = 'select * from todo_list order by created_at ASC'
        pool.query(selectQuery, (error, response) => {
            if (error) { reject({ message: 'something went wrong', error }) }
            else { resolve({ response }) }
        })
    })
}

exports.getTodoByIdService = (req, res) => {
    return new Promise((resolve, reject) => {
        const { id } = req.params
        const selectQuery = `select * from todo_list where id='${id}'`
        pool.query(selectQuery, (error, response) => {
            if (error) { reject({ message: 'something went wrong', error }) }
            else if (response.length == 0) { reject({ message: 'no record found' }) }
            else { resolve({ response }) }
        })
    })
}

exports.updateTodoService = (req, res) => {
    return new Promise((resolve, reject) => {
        const { id } = req.params
        const { title, isCompleted } = req.body
        const updateQuery = `update todo_list set title = '${title}', is_completed = '${isCompleted}' where id = '${id}'`
        pool.query(updateQuery, (error, response) => {
            if (error) { reject({ message: 'something went wrong', error }) }
            else { resolve({ response }) }
        })
    })
}

exports.deleteTodoService = (req, res) => {
    return new Promise((resolve, reject) => {
        const { id } = req.params
        const deleteQuery = `delete from todo_list where id = '${id}'`
        pool.query(deleteQuery, (error, response) => {
            if (error) { reject({ message: 'something went wrong', error }) }
            else { resolve({ response }) }
        })
    })
}