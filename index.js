var  express = require( 'express' );
var  router = express.Router();
var  sessionUser=require( '../public/user.js' );
/* GET home page. */
router. get ( '/' , function(req, res, next) {
     res.render( 'login' , {title:  'index' });
});
router.post( '/' ,function(req,res,next){
   var  userName = req.body.user;
   var  password = req.body.password;
   if  (userName == sessionUser.user.name && password == sessionUser.user.password) {
     req.session.sign =  true ;
     req.session.user = {name: userName};
     res.render( "main" ,{userName:userName});
   } else {
     res.end( 'sign failure' );
   }
});
//注销session
router. get ( '/out' , function(req, res){
   req.session.destroy();
   res.redirect( '/' );
})
module.exports = router;