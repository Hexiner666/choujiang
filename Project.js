var express=require('express');
var router=express.Router();
var lottery= require('../modules/lotteryManage.js');
router.get('/', function(req, res, next) {
    res.render('bouncedLottery');
});
router.post('/list', function(req, res, next) {
    var rows = req.body.rows;
    var page = req.body.page;
    var phone = req.body.phone;
    var whereSql= req.body.names;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    lottery.getUserInfo(rows,page,phone,whereSql,startTime,endTime,function(err,result,total){
        res.send({total: total, rows: result});
    });
});
router.post('/update',function(req,res){//修改
    var uid=req.body.messageId;
    var unickName=req.body.nickname;
    var uqq=req.body.qq;
    var uAddress=req.body.address;
    lottery.editUserInfo(uid,unickName,uqq,uAddress,function(err,result1){
        if(!err){
            res.send("true");
        }else {
            console.log(err);
            res.json("false");
        }
    });
});
router.post('/add',function(req,res){//增加
    var phone=req.body.phone;
    var unickName=req.body.nickname;
    var uqq=req.body.qq;
    var uAddress=req.body.address;
    lottery.getUserByNickname(unickName,function(err,count){
        if(count==0){
            lottery.addUserInfo(unickName,phone,uqq,uAddress,function(err,result){
                if(!err){
                    res.send("true");
                }else {
                    console.log(err);
                    res.json({suc:false,errMsg:'添加失败！'});
                }
            });
        }
        else{
            console.log(err);
            res.json({suc:false,errMsg:'该昵称已存在！'});
        }
    });
});
router.post('/delete',function(req,res){//删除
    var uid=req.body.ids;
    lottery.deleUserByid(uid,function(err,result){
        if(!err){
            res.send({success: true});
        }
        else{
            res.send({success: false});
        }
    });
});
module.exports = router;