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
            if (error) { reject({ error }) }
            else { resolve({ response }) }
        })
    })
}