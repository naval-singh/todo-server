const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../helpers/pool')

exports.signupService = (req, res) => {
    return new Promise(async (resolve, reject) => {

        let is_active = false
        const { email, password, role } = req.body
        const hash_password = await bcrypt.hash(password, 10)
        const body = { ...req.body, hash_password, is_active }
        const searchQuery = `select * from users where email='${email}'`
        
        if (role.toLowerCase() === 'user') { is_active = true }

        pool.query(searchQuery, (error, response) => {
            if (error) {
                reject({ message: "something went wrong", error })
            }
            else if (response.length > 0) {
                reject({ message: 'Email already exist', response })
            } else {
                const insertQuery = 'insert into users set ?'
                pool.query(insertQuery, body, (error, response) => {
                    if (error) { reject({ error }) }
                    else { resolve({ response }) }
                })
            }
        })
    })
}

exports.loginService = (req, res) => {
    return new Promise((resolve, reject) => {

        const { email, password } = req.body
        const searchQuery = `select * from users where email='${email}'`

        pool.query(searchQuery, async (error, response) => {
            if (error) {
                reject({ message: "something went wrong", error })
            }
            else if (response.length > 0) {
                const { first_name, last_name, role, hash_password, is_active } = response[0]
                if (await bcrypt.compare(password, hash_password)) {
                    const token = jwt.sign({ first_name, last_name, email, is_active, role }, process.env.JWT_SECRET)
                    resolve({ message: 'successfully logged in...', token })
                } else {
                    reject({ message: 'Invalid password' })
                }
            } else {
                reject({ message: 'User not found' })
            }
        })
    })
}