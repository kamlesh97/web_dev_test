//   post data controller 


const Teacher=require('../models/teacher');


module.exports.home_post=function(req,res){
    Teacher.create({
        name:req.body.name,
        qualification:req.body.qualification ,
        intro:req.body.intro ,
        location:req.body.location,
        email:req.body.email,
        image:req.body.image,
        contact:req.body.contact,
        
        classDetails:req.body.classDetails,
        courseDescription:req.body.courseDescription,
        skills:req.body.skills,
        fee:req.body.fee,
    },
    function(err, newTeacher){
        // if(err){console.log('error in creating teacheer'); return }
        console.log(newTeacher)
        return res.redirect('/')

    })

    
 
};

 