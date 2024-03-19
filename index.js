var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app=express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect('mongodb://127.0.0.1:27017/portfolio', {

useNewUrlParser:true,
useUnifiedTopology:true

});

var db = mongoose.connection;

db.on('error',()=>console.log('Error in connection to the Database'));
db.once('open',()=>console.log('connected to the database'));

app.post('/form',(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;


    var data = {
        'name':name,
        'email':email,
        'subject':subject,
        'message':message
    }

    db.collection('pf-details').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        };
        console.log('Record Inserted Succussfully');
    });
    return res.redirect('confirm.html');

});

app.get('/',(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":"*"
    });

    return res.redirect('index.html');
});

app.listen(1122,()=>{
    console.log('listening on PORT 1122');
});

