const express = require('express')
const route = express.Router()
const upload = require('../utils/helpers')

/*
    ADD image(s) to the repository
       "✓": one / bulk / enormous amount of images
       "✓": private or public (permissions)
       "✓": secure uploading and stored images
    DELETE image(s)
       "x": one / bulk / selected / all images
       "x": Prevent a user deleting images from another user (access control)
       "x": secure deletion of images
*/

const auth = require('../middleware/auth')

const UserController = require('../controllers/UserController')
const RegisterControler = require('../controllers/RegisterController')
const ImageController = require('../controllers/ImageController')

//register
route.post('/api/register', RegisterControler.register)

//login
route.post('/api/login', UserController.signin)

//Images
route.get('/api/display', ImageController.getImages)
route.post('/api/upload', auth, upload.array('image'), ImageController.addImage)


module.exports = route;