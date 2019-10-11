let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let taskSchema = new Schema({
    title: {
        type:String,
        trim: true,
        required:[true, "You need a task to task"],
        minlength:[4, "Title needs at least 4 charictors."]
    },
    desc:{
        type:String,
        trim: true,
        default: ""
    },
    completed:{
        type: Boolean,
        required:true,
        default:false
    },
}, {timestamp:true});

// Model
mongoose.model('Task', taskSchema);
