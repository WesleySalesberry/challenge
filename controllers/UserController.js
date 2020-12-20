const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports = {
    async signin(req, res) {
   const {username, password} = req.body

    try {
        let user = await User.findOne({ username })

        if(!user){
            return res.status(400).json({
					errors: [ { message: 'Invalid Credentials' } ]
				});
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
				return res.status(400).json({
					errors: [ { message: 'Invalid Credentials' } ]
				});
            }
            
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: 30000 }, (error, token) => {
            if(error) throw err
            res.json({ token })
            
        })

    } catch (error) {
        console.error(`POST: ${error.message}`);
        res.status(500).send(`Server Error > ${error}`)
    }

	}

    }
