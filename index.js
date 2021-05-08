const express= require('express')
const port=8000;
var bodyParser = require('body-parser');
var fs = require('fs');
const db = require('./config/mongoose');
const Teacher=require('./models/teacher');

const app=express();
const path = require('path');
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(express.static('assets'))

app.set('view engine','ejs');
app.set('views','./views');









app.use('/',require('./routes'));



app.listen(port, function(err){
    if(err){        console.log(err)    }
    console.log(`server is running on port : ${port}`)
})