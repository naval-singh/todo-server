const shortid = require('shortid')
const pool = require('../helpers/pool')

exports.addNewTodoService = (req, res) => {
    return new Promise((resolve, reject) => {
        const body = {
            id: shortid.generate(),
            title: req.body.title,
            user_id: req.user.id,
            is_completed: false
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
        const selectQuery = 'select * from todo_list'
        pool.query(selectQuery, (error, response) => {
            if (error) { reject({ message: 'something went wrong', error }) }
            else { resolve({ response }) }
        })
    })
}