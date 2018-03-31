var dbtodotask=require('../models/task')
exports.insertTask=(req,res)=>{
    if(!req.body.taskName){
        res.json(
            {success: false,
            msg :"pls enter all details"
       } )
    }else{
        var newTask=new dbtodotask({
            email:req.decoded.email,
            taskName: req.body.taskName,
            createdDate :new Date()
        })
        newTask.save((err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg :" error in database"
                })
            }
            else{
                res.json({
                    success:true,
                    msg: "task inserted"
                })
            }
        })
    }
}