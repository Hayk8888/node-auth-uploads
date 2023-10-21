const {Schema, model} = require('mongoose');


const  File = new  Schema ({
    file: {
        type:  String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },

    updateAt: {
        type: Date,
        default: Date.now
    }

}, {timestamps: true});

const FileSchema = model('File', File);

module.exports = FileSchema


