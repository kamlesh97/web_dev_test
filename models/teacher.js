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
})


const Teacher=mongoose.model('Teacher',teacherSchema)

module.exports=Teacher