const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });

        console.log("DB Connected");
    }   catch(err) {
        console.error(err.message);

        process.exit(1);
    }
}

//finally exporting connection
module.exports = connectDB;
