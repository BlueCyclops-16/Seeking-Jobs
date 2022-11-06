const mongoose = require('mongoose');

const CompanyPost = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companies'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now()
    }
});


const companyPost = mongoose.model('companypost', CompanyPost);
module.exports = companyPost;