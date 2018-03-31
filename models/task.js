var mongoose= require('mongoose')
var Schema= mongoose.Schema

var TaskSchema=new Schema({
    email:{
        type: String,
        required: 'required to link tasks'
    },
    taskName:{
        type: String,
        required: 'Please enter the name'
    },
    created_Date:{
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        default:'pending'
    },
    completed_Date:{
        type:Date,

    },
    updated_Date:{
        type: Date
    }
})
module.exports=mongoose.model('Tasks',TaskSchema);