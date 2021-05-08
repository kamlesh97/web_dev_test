const express= require('express')
const port=8000;

const db = require('./config/mongoose');
const Teacher=require('./models/teacher');

const app=express();
const path = require('path');
app.use(express.urlencoded());
app.use(express.static('assets'))

app.set('view engine','ejs');
app.set('views','./views');


var teacherList=[
    {name:'abc',
    qualification:'bed',
    intro:'hi, my name is abc. from ......',
    location:'delhi',
    email:'abc@gmail.com',
    contact:'1234567890'
    }
]

app.get('/', function(req, res){
    Teacher.find({},function(err,teachers){


        return res.render('home',{title:'registration',
    
    teacher_list:teachers
})
        
    })


    
})


app.post('/create_data', function(req,res){
    // console.log(req.body)
    // teacherList.push({
    //     name:req.body.name,
    //     qualification:req.body.qualification ,
    //     intro:req.body.intro ,
    //     location:req.body.location,
    //     email:req.body.email,
    //     contact:req.body.contact 
    // })


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

    
})


app.get('/delete_data', function(req,res){

    let id=req.query.id;
    Teacher.findByIdAndDelete(id,
        function(err){
            return res.redirect('/')
        }
        )

    

})









// app.use('/',require('./routes'));



app.listen(port, function(err){
    if(err){        console.log(err)    }
    console.log(`server is running on port : ${port}`)
})