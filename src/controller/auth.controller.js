const { signupService, loginService } = require('../services/auth.service')

exports.signup = (req, res) => {
    signupService(req, res)
        .then(response => res.status(200).json({ response }))
        .catch(error => res.status(400).json({ error }))
}

exports.login = (req, res) => {
    loginService(req, res)
        .then(response => res.status(200).json({ response }))
        .catch(error => res.status(400).json({ error }))
}