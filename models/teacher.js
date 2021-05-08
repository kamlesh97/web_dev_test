const mongoose=require('mongoose')

const teacherSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    qualification:{
        type:String,
        require:true
    },
    intro:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    contact:{
        type:Number,
        require:true
    },
    classDetails:{
        type:String,
        require:true
    },
    courseDescription:{
        type:String,
        require:true
    },
    skills:{
        type:String,
        require:true
    },
    fee:{
        type:Number,
        require:true
    },
    image:{
        data: Buffer,
        contentType: String
    }
})


const Teacher=mongoose.model('Teacher',teacherSchema)

module.exports=Teacher