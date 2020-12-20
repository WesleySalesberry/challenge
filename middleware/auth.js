const jwt = require('jsonwebtoken')
const { model } = require('../models/User')

module.exports = function(req, res, next){
     const token = req.header('auth-token');
     
     if(!token){
         return res.status(401).json({ msg: 'Token not authorized' })
     }
     try {
         const decode = jwt.verify(token, process.env.JWT_TOKEN)
         req.user = decode.user
         next()

     } catch (error) {
         console.log('Error with auth middleware')
         res.status(500).json({ msg: `Server Error > ${error}` })
     }
}