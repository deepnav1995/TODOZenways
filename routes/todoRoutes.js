

var express=require('express')
var router=express.Router();
var tokenVerify=require('./jwtVerify')
var todo=require('./todoTask')
var registrationLogin=require('./registrationLogin')
router.post('/register',registrationLogin.registration)
router.post('/login',registrationLogin.login)
router.post('/insert',tokenVerify,todo.insertTask)
module.exports=router;