const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
	{
		username: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user'
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


module.exports = mongoose.model('image', ImageSchema);