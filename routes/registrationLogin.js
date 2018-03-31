
var dbLogin = require('../models/user')
var jwt=require('jsonwebtoken')

exports.registration=(req,res)=>{
    if(!req.body.email||!req.body.password){
        res.json({
            success: false,
            msg: "pls enter all details"
        })
    }else{
        dbLogin.findOne({email:req.body.email},(err,loginData)=>{
            if(err){
                res.json({
                    success:false,
                msg :"database error"
                })
            }else if(!loginData||loginData==null){
                var newPerson=new dbLogin({
                    email:req.body.email,
                    password:req.body.password
                })
                newPerson.save((err,savedData)=>{
                    if(err){
                        res.json({
                            success: false,
                            msg:"error while saving data"
    
                        })
                    }else{
                        res.json({
                            success: true,
                            msg:"data resgistration done"
    
                        })
                    }
                })

            }else{
                res.json({
                    sucess: true,
                    msg: "you have already registered.pls sign in "
                })
            }
        })
    }
}
exports.login = (req, res) => {
    
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Enter email and password both."
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, lData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Database error"
                })
            } else if (!lData || lData == null) {
                res.json({
                    success: false,
                    msg: "You have not registered."
                })
            } else {
                if (req.body.password == lData.password) {
                    var tokenData={
                        email:lData.email
                    }
                    var token = jwt.sign(tokenData,req.app.get('secret'));
                    res.json({
                        success:true,
                        msg:"login successfull",
                        token: token
                    })
                } else {
                    res.json({
                        success: false,
                        msg: "Wrong password"
                    })
                }
            }
        })
    }
}
