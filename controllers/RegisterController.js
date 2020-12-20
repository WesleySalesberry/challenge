const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports ={
    async register(req, res){
        const { username, password } = req.body
        
        try {
            let user = await User.findOne({ username })
            if(user){
                return res.status(400).json({
                    errors: [{message: 'An account already exist'}]
                })
            }
            user = new User({
                username,
                password
            })

            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)

            user.save()

            const payload = {
                user:{
                    id: user.id
                }
            }

            jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: 30000 }, (err, token) => {
                if(err) throw err
                res.json({ token })
            })
            
        } catch (error) {
            console.log(error.message);
            res.status(500).send(`Server Error> ${error}`)
        }

    }
}