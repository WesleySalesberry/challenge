const multer = require('multer')

const storage = multer.diskStorage({
	filename: function(req, file, callback){
		callback(null, new Date().toISOString() + '_' + file.originalname)
	}
})

const fileFilter = (req, file, callback)=> {
	if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ||file.mimetype === 'image/jpg'){
		callback(null, true)
	}else{
		callback({message: "Unsupported file format"}, false)
	}
}

const upload = multer({
	storage: storage,
	fileFilter: fileFilter
})

module.exports = upload