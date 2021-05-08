const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/teacher_list_db')


const db=mongoose.connection;

db.on('error', console.error.bind(console,'error connceting to db'))

db.once('open', function(){
    console.log('successfully connected to db')
})