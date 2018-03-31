var express= require('express')
var app=express();
var bodyParser=require('body-parser')
var morgan=require('morgan');
var mongoose= require('mongoose');
 var config= require('./config');
 app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//  var registrationLogin=require('./routes/registrationLogin')
 var jwtVerify= require('./routes/jwtVerify');
 var todoRoutes= require('./routes/todoRoutes');


var port= process.env.PORT ||8000;
mongoose.connect(config.database,(err,data)=>{
    if(err){
        success: false;
        console.log('connection failure')
    }else{
        success:true;
        console.log('database connected')
    }
});
app.set('secret',config.secret)
app.use('/todoRoutes',todoRoutes)

app.use(morgan('dev'));
// app.use('/',registrationLogin);


app.listen(port);
console.log('use API https://localhost:' + port);


