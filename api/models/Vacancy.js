const mongoose = require('mongoose');

const Vacancy = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companies'
    },
    companyname: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    joblocation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userapplied : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


const vacancy = mongoose.model('vacancy', Vacancy);
module.exports = vacancy;