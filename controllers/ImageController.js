const ImageModel = require('../models/Image')
const fs = require('fs')
const cloudinary = require('../utils/cloudinary')
const { url } = require('inspector')
const User = require('../models/User')

module.exports = {
    async addImage(req, res) {
          try {
              const uploader = async (path) => await cloudinary.uploads(path, `Images`)
              const urls = []
              const files = req.files
              for(const file of files){
                  const { path } = file;
                  const newPath = await uploader(path)
                  urls.push(newPath)
                  fs.unlinkSync(path)
                }

                const newImage = new ImageModel({
                        username: req.user.id,
                        urls: urls
                    })

                    newImage.save(newImage) 
                    
                res.status(200).json({
                    message: 'Images uploaded successfully',
                })
           
       } catch (error) {
           res.send(error)
           
       }

    },

     async getImages(req, res){
        try {
            const img = await ImageModel.find()
            res.json(img)
        } catch (error) {
            
        }

    },
}