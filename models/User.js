const mongoose = require('mongoose');
const { schema } = require('./Image');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('username', UserSchema);