//   post data controller 


const Teacher=require('../models/teacher');


module.exports.home_post=function(req,res){
    Teacher.create({
        name:req.body.name,
        qualification:req.body.qualification ,
        intro:req.body.intro ,
        location:req.body.location,
        email:req.body.email,
        contact:req.body.contact 
    },
    function(err, newTeacher){
        // if(err){console.log('error in creating teacheer'); return }
        console.log(newTeacher)
        return res.redirect('/')

    })

    
 
};

 