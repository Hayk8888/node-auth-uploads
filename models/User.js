const {Schema, model} = require('mongoose');


const User = new Schema ({
   username: {
       type: String,
       unique: true,
       required: true
   },

   email: {
       type: String,
       require: true,
       unique: true
   },

    password: {
       type: String,
       required: true
    },
    roles: {
        enum: ['USER', 'ADMIN'],
        type: String,
        required: true,
            default: "USER"
    },
})

module.exports = model('User', User)