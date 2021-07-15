const express= require('express');
const passport = require('passport');
const User=require('../models/userModel');

// router ile yönlendirme sağlanır. 
const router= express.Router();



// admin sayfası dizi modeli 
let adminaksiyonlari=
[
{
    actionid:1,
    actionname:"changeHomeImage",
    displayname:"change Home Image"
},
{
    actionid:2,
    actionname:"changeAboutImage",
    displayname:"change About Image"
},

{
    actionid:3,
    actionname:"changeAbouyImage",
    displayname:"change About Image"
},
{
    actionid:4,
    actionname:"addnewblog",
    displayname:"Add New Blog"
},

{
    actionid:5,
    actionname:"listAllBlogs",
    displayname:"list All Blogs"
}

];


//Veri tabanından blogları çekmeden önce dizilerle deneme.
// Ana router home a göndermeye çalışıcaz. Nesne oluşturup atmaya çalışıcaz.
router.get("/admin", (req,res)=>{

    res.render('admin/admin',{adminaksiyonlari:adminaksiyonlari});
});

router.get('/signin',(req,res)=>{

    // Fİle render edicez çalıştırcaz
    res.render('admin/signin');



});

router.post('/signin',(req,res)=>{

  



});

router.get('/signup',(req,res)=>{

    // Fİle render edicez çalıştırcaz
    res.render('admin/signup');



});

//Kayıt olma

router.post('/signup',(req,res)=>{

    // username i bulmaya çalışıcaz.
  


    let newUser=new User({username:req.body.username});
    User.register(newUser,req.body.password,(err,user)=>{

        if(err){

            console.log(err);
            res.redirect("/signup");
        }
        passport.authenticate("local")(req,res,()=>{
            res.redirect("/");

        });


    });





});


// routeri dahil etme anlamına gelir ezber kod. 
module.exports=router;