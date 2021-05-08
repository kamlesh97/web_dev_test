//  home controller



const Teacher=require('../models/teacher');

module.exports.home=function(req,res){

    Teacher.find({},function(err,teachers){


        return res.render('home',{title:'registration',
    
    teacher_list:teachers
})
        
    })



    }
 