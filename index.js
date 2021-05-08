const express= require('express')
const port=8000;

// const db = require('./config/mongoose');


const app=express();
const path = require('path');


app.use(express.urlencoded());


app.set('view engine','ejs');
app.set('views','./views');


app.get('/', function(req, res){
    return res.render('home',{title:'registration'})
})


// app.use('/',require('./routes'));



app.listen(port, function(err){
    if(err){        console.log(err)    }
    console.log(`server is running on port : ${port}`)
})