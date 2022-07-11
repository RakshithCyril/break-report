const mongoose = require('mongoose')


const dataSchema = new mongoose.Schema({
    startDate:{
        type:String,
        required:[true, 'not provoided']
    },
    stopDate:{
        type:String,
        required:[true, 'not provoided']
    },
    totalTime:{
        type:String,
        required:[true, 'not provoided']
    }
})

module.exports = mongoose.model('Data',dataSchema);