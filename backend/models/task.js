
const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({

    
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,

    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    completed : {
        type : Boolean,
        default : false
    }

});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;

