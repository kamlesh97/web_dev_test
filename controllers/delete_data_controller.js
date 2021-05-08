//  delete data controller

// const Todo = require('../models/todo')

const Teacher=require('../models/teacher');

module.exports.home_delete=function(req,res){

    let id=req.query.id;
    Teacher.findByIdAndDelete(id,
        function(err){
            return res.redirect('/')
        }
        )

    }    