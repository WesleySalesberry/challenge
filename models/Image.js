const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
	{
		username: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Username'
		},
		urls: [{
			url: String,
			id: String
		}],
		date: {
			type: Date,
			default: Date.now()
		}
	},
);


module.exports = mongoose.model('Image', ImageSchema);