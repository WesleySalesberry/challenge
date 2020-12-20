const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
        console.log('MongoDB Connected..')
    } catch (error) {
        console.error(`From MongoDB: ${error.message}`);

		process.exit(1);
    }
}

module.exports = connectDB;